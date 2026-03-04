import React from 'react';
import type { PointBreakdown } from '../types/f1';

interface ModalProps {
  data: { driverName: string; year: number; breakdown: PointBreakdown };
  circuitName: string;
  onClose: () => void;
}

export const PointBreakdownModal: React.FC<ModalProps> = ({ data, circuitName, onClose }) => {
  const { breakdown, driverName, year } = data;

  const stats = [
    { label: 'Race Base', val: breakdown.raceBase },
    { label: 'Quali Bonus', val: breakdown.qualiBase },
    { label: 'Pos. Delta', val: breakdown.posDelta },
    { label: 'Fastest Lap', val: breakdown.fastestLap },
    { label: 'Penalties', val: breakdown.penalties, isNegative: true },
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm" 
      onClick={onClose}
    >
      <div 
        className="bg-slate-900 border border-slate-700 rounded-xl shadow-2xl w-full max-w-xs overflow-hidden" 
        onClick={e => e.stopPropagation()}
      >
        <div className="p-4 border-b border-slate-700 bg-slate-800/50">
          <h4 className="font-bold text-white">{driverName}</h4>
          <p className="text-[10px] text-slate-400 uppercase tracking-widest">
            {circuitName} • {year}
          </p>
        </div>
        
        <div className="p-4 space-y-3">
          {stats.map((item) => (
            <div key={item.label} className="flex justify-between text-xs">
              <span className="text-slate-400">{item.label}</span>
              <span className={`font-bold ${item.isNegative && item.val < 0 ? 'text-red-400' : 'text-slate-200'}`}>
                {item.val > 0 ? `+${item.val}` : item.val}
              </span>
            </div>
          ))}
          
          <div className="pt-3 border-t border-slate-700 flex justify-between items-center">
            <span className="text-xs font-bold text-white">Total Pts</span>
            <span className={`text-lg font-black ${breakdown.total >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {breakdown.total > 0 ? `+${breakdown.total}` : breakdown.total}
            </span>
          </div>
        </div>

        <button 
          onClick={onClose} 
          className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-300 transition-colors uppercase"
        >
          Close
        </button>
      </div>
    </div>
  );
};