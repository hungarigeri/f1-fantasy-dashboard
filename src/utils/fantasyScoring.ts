// src/utils/fantasyScoring.ts
import type { PointBreakdown, Driver } from '../types/f1';

/**
 * Matches an Ergast API driver to our local 2026 driver list
 */
export const matchDriverToGrid = (ergastResult: any, driversList: Driver[]): Driver | undefined => {
  const driverId = ergastResult.Driver.driverId;
  const familyName = ergastResult.Driver.familyName.toLowerCase();
  
  return driversList.find(d => 
    driverId === d.id || 
    driverId.includes(d.id) || 
    d.name.toLowerCase().includes(familyName)
  );
};

export const getQualifyingPoints = (position: number, dsq: boolean, noTimeSet: boolean): number => {
  if (dsq || noTimeSet) return -5;
  const positionPoints: Record<number, number> = {
    1: 10, 2: 9, 3: 8, 4: 7, 5: 6, 6: 5, 7: 4, 8: 3, 9: 2, 10: 1
  };
  return positionPoints[position] || 0;
};

export const calculateDetailedErgastResultPoints = (result: any): PointBreakdown => {
  const rawGrid = parseInt(result.grid);
  const noTimeSet = rawGrid === 0 || isNaN(rawGrid);
  const grid = noTimeSet ? 20 : rawGrid; 
  const finish = parseInt(result.position);
  
  const isFinished = result.status === 'Finished' || result.status.includes('Lap');
  const isDSQ = result.status === 'Disqualified';
  const isDNF = !isFinished && !isDSQ;
  
  const fastestLap = result.FastestLap?.rank === "1";
  const posGained = Math.max(0, grid - finish);
  const posLost = Math.max(0, finish - grid);

  let qualiBase = getQualifyingPoints(grid, isDSQ, noTimeSet);
  let raceBase = 0;
  let posDelta = 0;
  let flPts = 0;
  let penalties = isDSQ ? -20 : (isDNF ? -10 : 0);

  if (!isDSQ && !isDNF) {
    const positionPointsMap: Record<number, number> = { 1: 25, 2: 18, 3: 15, 4: 12, 5: 10, 6: 8, 7: 6, 8: 4, 9: 2, 10: 1 };
    raceBase = positionPointsMap[finish] || 0;
    posDelta = (posGained * 2) - posLost; 
    if (fastestLap) flPts = 10;
  }

  return {
    total: qualiBase + raceBase + posDelta + flPts + penalties,
    raceBase, qualiBase, posDelta, fastestLap: flPts, penalties
  };
};