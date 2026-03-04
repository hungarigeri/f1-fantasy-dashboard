import React, { useState } from 'react';
import { useTrackHistory } from '../hooks/useTrackHistory';
import { PointBreakdownModal } from './PointBreakdownModal';
import { TrackHistoryRow } from './TrackHistoryRow';
import type { CircuitHistoryProps, PointBreakdown } from '../types/f1';

export const CircuitHistory: React.FC<CircuitHistoryProps> = ({ circuitId, circuitName }) => {
  const { records, trackMaster, loading } = useTrackHistory(circuitId);
  const [selectedBreakdown, setSelectedBreakdown] = useState<{
    driverName: string;
    year: number;
    breakdown: PointBreakdown;
  } | null>(null);

  const Header: React.FC<{ title: string }> = ({ title }) => (
  <div className="mb-6">
    <h3 className="text-xl font-bold text-white">🏎️ Track History: {title}</h3>
    <p className="text-xs text-slate-400 uppercase tracking-wider">
      Recalculated with 2026 Fantasy Rules
    </p>
  </div>
);

const CircuitMasterCard: React.FC<{ 
  master: { name: string; pts: number; year: number } 
}> = ({ master }) => (
  <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-lg p-4 mb-6 flex items-center justify-between">
    <div>
      <p className="text-yellow-500/80 text-[10px] font-black uppercase tracking-widest">
        Circuit Master
      </p>
      <p className="text-white font-bold text-lg">{master.name}</p>
    </div>
    <div className="text-right">
      <p className="text-yellow-500 font-black text-2xl">+{master.pts}</p>
      <p className="text-slate-500 text-[10px] font-bold uppercase">
        Set in {master.year}
      </p>
    </div>
  </div>
);
const LoadingState = () => (
  <div className="bg-slate-800/40 rounded-xl p-6 border border-slate-700/50 text-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500 mx-auto mb-3"></div>
    <p className="text-slate-400 text-sm">Analyzing historical data...</p>
  </div>
);

  if (loading) return <LoadingState />;

  return (
    <section className="bg-slate-800/40 rounded-xl p-6 border border-slate-700/50">
      <Header title={circuitName} />

      {trackMaster && <CircuitMasterCard master={trackMaster} />}

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border-separate border-spacing-y-1">
          <thead>
            <tr className="text-[10px] text-slate-500 uppercase tracking-widest">
              <th className="px-4 py-2">Driver</th>
              {['2025', '2024', '2023'].map(year => (
                <th key={year} className="px-4 py-2 text-center">{year}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <TrackHistoryRow 
                key={record.driver.id} 
                record={record} 
                onSelectBreakdown={setSelectedBreakdown} 
              />
            ))}
          </tbody>
        </table>
      </div>

      {selectedBreakdown && (
        <PointBreakdownModal 
          data={selectedBreakdown} 
          circuitName={circuitName}
          onClose={() => setSelectedBreakdown(null)} 
        />
      )}
    </section>
  );
};