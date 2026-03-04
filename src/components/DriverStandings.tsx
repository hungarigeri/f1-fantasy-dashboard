import React from 'react';
import { teamColors } from '../Data/temp';
import type { DriverWithStats } from '../types/f1';

interface DriverStandingsProps {
  drivers: DriverWithStats[];
  onSelectDriver: (driver: DriverWithStats) => void;
}

export const DriverStandings: React.FC<DriverStandingsProps> = ({ drivers, onSelectDriver }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-black text-white italic uppercase">Driver Rankings</h3>
          <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Based on Fantasy Points</p>
        </div>
        <span className="px-3 py-1 bg-red-600/10 border border-red-600/20 text-red-500 text-[10px] font-black rounded-full uppercase tracking-tighter">
          2026 Specs
        </span>
      </div>

      <div className="space-y-1">
        {drivers.map((driver, index) => {
          const teamColor = teamColors[driver.team];
          return (
            <button
              key={driver.id}
              onClick={() => onSelectDriver(driver)}
              className="group w-full p-4 rounded-xl border border-transparent hover:border-slate-700 hover:bg-slate-800/40 transition-all text-left flex items-center gap-4"
            >
              <div className="text-sm font-black text-slate-600 w-6">
                {(index + 1).toString().padStart(2, '0')}
              </div>
              <div className="w-1 h-8 rounded-full" style={{ backgroundColor: teamColor }}></div>
              <div className="flex-1">
                <p className="font-bold text-slate-200 group-hover:text-white transition-colors">{driver.name}</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase">{driver.team}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-black text-red-500">{driver.fantasyPoints}</p>
                <p className="text-[9px] text-slate-600 font-bold uppercase">Points</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};