import React from 'react';
import { teamColors } from '../Data/temp';
import type { DriverWithStats } from '../types/f1';

interface DriverModalProps {
  driver: DriverWithStats | null;
  onClose: () => void;
}

export const DriverModal: React.FC<DriverModalProps> = ({ driver, onClose }) => {
  if (!driver) return null;

  const teamColor = teamColors[driver.team] || '#FFFFFF';

  return (
    <>
      <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40" onClick={onClose}></div>
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-slate-900 rounded-2xl max-w-md w-full border border-slate-700 shadow-2xl relative overflow-hidden transform transition-all">
          
          <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors z-10">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="h-2 w-full" style={{ backgroundColor: teamColor }}></div>

          <div className="p-8">
            <header className="mb-6">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Entry No. {driver.number}</p>
              <h2 className="text-3xl font-black text-white italic uppercase">{driver.name}</h2>
              <p className="text-sm font-bold" style={{ color: teamColor }}>{driver.team}</p>
            </header>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: 'Age', value: driver.age },
                { label: 'Car #', value: driver.number },
                { label: 'WDC Points', value: driver.championshipPoints },
                { label: 'Fantasy Pts', value: driver.fantasyPoints, highlight: true }
              ].map((stat, i) => (
                <div key={i} className={`rounded-xl p-4 ${stat.highlight ? 'bg-red-600/10 border border-red-600/20' : 'bg-slate-800/50 border border-slate-700/50'}`}>
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">{stat.label}</p>
                  <p className={`text-xl font-black ${stat.highlight ? 'text-red-500' : 'text-white'}`}>{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="bg-slate-800/30 rounded-xl p-5 border border-slate-700/30 mb-8">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">2026 Season Analysis</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Statistical scoring breakdowns and performance trends will populate here automatically once race data is recorded for the 2026 season.
              </p>
            </div>

            <button 
              onClick={onClose} 
              className="w-full bg-slate-800 hover:bg-slate-700 text-white text-xs font-black py-4 rounded-xl transition-all uppercase tracking-widest border border-slate-700"
            >
              Close Profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
};