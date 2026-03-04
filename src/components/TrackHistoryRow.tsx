import React from 'react';
import type { RowProps } from '../types/f1';



export const TrackHistoryRow: React.FC<RowProps> = ({ record, onSelectBreakdown }) => {
  const years = [
    { key: record.bd2025, label: 2025 },
    { key: record.bd2024, label: 2024 },
    { key: record.bd2023, label: 2023 },
  ];

  return (
    <tr className="group hover:bg-slate-700/20 transition-colors">
      <td className="px-4 py-3 font-bold text-slate-200 border-l-2 border-transparent group-hover:border-red-500">
        {record.driver.name}
      </td>
      
      {years.map(({ key, label }) => (
        <td key={label} className="px-2 py-3 text-center">
          {key ? (
            <button 
              onClick={() => onSelectBreakdown({ driverName: record.driver.name, year: label, breakdown: key })}
              className={`min-w-[45px] py-1 px-2 rounded text-xs font-black transition-transform active:scale-95 
                ${key.total >= 0 ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}
            >
              {key.total > 0 ? `+${key.total}` : key.total}
            </button>
          ) : (
            <span className="text-slate-700 text-[10px] italic">N/A</span>
          )}
        </td>
      ))}
    </tr>
  );
};