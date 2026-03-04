import React from 'react';
import type {ConstructorStandingsProps } from '../types/f1';


export const ConstructorStandings: React.FC<ConstructorStandingsProps> = ({ constructors }) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-black text-white italic uppercase">Constructor Rankings</h3>
        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Team Performance Hub</p>
      </div>

      <div className="space-y-1">
        {constructors.map((constructor, index) => (
          <div 
            key={constructor.name} 
            className="p-4 rounded-xl border border-transparent bg-slate-800/20 flex items-center gap-4"
          >
            <div className="text-sm font-black text-slate-600 w-6 text-center">
              {(index + 1).toString().padStart(2, '0')}
            </div>
            <div className="w-1 h-10 rounded-full" style={{ backgroundColor: constructor.color }}></div>
            <div className="flex-1">
              <p className="font-bold text-slate-200 uppercase text-sm tracking-wide">{constructor.name}</p>
              <p className="text-[10px] text-slate-500 font-medium">
                {constructor.drivers.join(' / ')}
              </p>
            </div>
            <div className="text-right">
              <p className="text-lg font-black text-red-500">{constructor.fantasyPoints}</p>
              <p className="text-[9px] text-slate-600 font-bold uppercase">Points</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};