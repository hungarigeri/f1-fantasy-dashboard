import { useState, useEffect } from 'react';
import { calculateDetailedErgastResultPoints, matchDriverToGrid } from '../utils/fantasyScoring';
import { drivers2026 } from '../Data/temp';
import type { TrackRecord } from '../types/f1';

const YEARS = [2025, 2024, 2023];

type TrackMaster = {
  name: string;
  pts: number;
  year: number;
};

const createInitialDriverStats = (): Map<string, TrackRecord> => {
  const map = new Map<string, TrackRecord>();

  drivers2026.forEach((driver) => {
    map.set(driver.id, {
      driver: { ...driver, fantasyPoints: 0, championshipPoints: 0 },
      bd2025: null,
      bd2024: null,
      bd2023: null,
      best: -Infinity,
    });
  });

  return map;
};

const fetchSeasonResults = async (circuitId: string) => {
  const requests = YEARS.map((year) =>
    fetch(
      `https://api.jolpi.ca/ergast/f1/${year}/circuits/${circuitId}/results.json`
    ).then((res) => res.json())
  );

  return Promise.all(requests);
};

export const useTrackHistory = (circuitId: string) => {
  const [records, setRecords] = useState<TrackRecord[]>([]);
  const [trackMaster, setTrackMaster] = useState<TrackMaster | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!circuitId) return;

    const loadTrackHistory = async () => {
      setLoading(true);

      try {
        const results = await fetchSeasonResults(circuitId);
        const driverStats = createInitialDriverStats();

        let currentMaster: TrackMaster | null = null;

        results.forEach((seasonData, index) => {
          const year = YEARS[index];
          const races = seasonData.MRData?.RaceTable?.Races;

          if (!races?.length) return;

          races[0].Results.forEach((result: any) => {
            const breakdown = calculateDetailedErgastResultPoints(result);
            const matchedDriver = matchDriverToGrid(result, drivers2026);

            // 🔹 Update driver stats
            if (matchedDriver) {
              const stat = driverStats.get(matchedDriver.id);
              if (!stat) return;

              const yearKey = `bd${year}` as keyof TrackRecord;
              (stat as any)[yearKey] = breakdown;

              stat.best = Math.max(stat.best, breakdown.total);
            }

            // 🔹 Update track master
            if (!currentMaster || breakdown.total > currentMaster.pts) {
              currentMaster = {
                name: matchedDriver
                  ? matchedDriver.name
                  : `${result.Driver.givenName} ${result.Driver.familyName}`,
                pts: breakdown.total,
                year,
              };
            }
          });
        });

        const sortedRecords = Array.from(driverStats.values()).sort(
          (a, b) => b.best - a.best
        );

        setRecords(sortedRecords);
        setTrackMaster(currentMaster);
      } catch (error) {
        console.error('Track History Fetch Error:', error);
      } finally {
        setLoading(false);
      }
    };

    loadTrackHistory();
  }, [circuitId]);

  return { records, trackMaster, loading };
};