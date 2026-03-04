import { useMemo, useState } from 'react';
import { Countdown } from './components/Countdown';
import { DriverStandings } from './components/DriverStandings';
import { ConstructorStandings } from './components/ConstructorStandings';
import { DriverModal } from './components/DriverModal';
import { FantasyScoringInfo } from './components/FantasyScoringInfo';
import { CircuitHistory } from './components/CircuitHistory';

import { drivers2026, teamColors, teams2026 } from './Data/temp';
import { useNextRace } from './hooks/useNextRace';

import type { DriverWithStats, ConstructorData } from './types/f1';

function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-slate-800/40 rounded-xl border border-slate-700/50 p-6">
      {children}
    </section>
  );
}

function Header() {
  return (
    <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-md sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center font-black italic text-xl">
            F1
          </div>
          <div>
            <h1 className="text-2xl font-bold">Fantasy Dashboard</h1>
            <p className="text-xs text-slate-400 uppercase tracking-widest">
              2026 Pre-Season Hub
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function App() {
  const { nextRace } = useNextRace();
  const [selectedDriver, setSelectedDriver] = useState<DriverWithStats | null>(null);
  const driverFantasyData = useMemo<DriverWithStats[]>(() => {
    return drivers2026.map((driver) => ({
      ...driver,
      fantasyPoints: 0,
      championshipPoints: 0,
    }));
  }, []);

  const constructorFantasyData = useMemo<ConstructorData[]>(() => {
    return teams2026.map((team) => ({
      name: team,
      fantasyPoints: 0,
      drivers: driverFantasyData
        .filter((d) => d.team === team)
        .map((d) => d.name),
      color: teamColors[team] ?? '#FFFFFF',
    }));
  }, [driverFantasyData]);

  return (
    <div className="min-h-screen bg-slate-900 text-white selection:bg-red-500/30">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {nextRace && (
            <>
              <Countdown
                targetDate={nextRace.date}
                raceName={nextRace.name}
                raceInfo={nextRace.circuit}
              />

              <CircuitHistory
                circuitId={nextRace.circuitId}
                circuitName={nextRace.circuit}
              />
            </>
          )}

          <Section>
            <DriverStandings
              drivers={driverFantasyData}
              onSelectDriver={setSelectedDriver}
            />
          </Section>

          <Section>
            <ConstructorStandings constructors={constructorFantasyData} />
          </Section>
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-28">
            <FantasyScoringInfo />
          </div>
        </aside>
      </main>

      <DriverModal
        driver={selectedDriver}
        onClose={() => setSelectedDriver(null)}
      />
    </div>
  );
}