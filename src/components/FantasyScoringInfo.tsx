import React, { useState } from 'react';

/**
 * FantasyScoringInfo component displays the complete 2026 F1 Fantasy scoring rules
 * Organized by category: Qualifying, Sprint, Race, and Constructor bonuses
 */
export const FantasyScoringInfo: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    qualifying: true,
    sprint: false,
    race: false,
    constructor: false,
  });

  const toggleSection = (section: string): void => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-white mb-6">2026 Fantasy Scoring Rules</h2>

      <ScoringSection
        title="Qualifying"
        isExpanded={expandedSections.qualifying}
        onToggle={() => toggleSection('qualifying')}
        content={
          <div className="space-y-2">
            <ScoringRow position="1st" points={10} />
            <ScoringRow position="2nd" points={9} />
            <ScoringRow position="3rd" points={8} />
            <ScoringRow position="4th" points={7} />
            <ScoringRow position="5th" points={6} />
            <ScoringRow position="6th" points={5} />
            <ScoringRow position="7th" points={4} />
            <ScoringRow position="8th" points={3} />
            <ScoringRow position="9th" points={2} />
            <ScoringRow position="10th" points={1} />
            <ScoringRow position="11th - 20th" points={0} />
            <ScoringRow position="NC/DSQ/No time" points={-5} />
          </div>
        }
      />

      <ScoringSection
        title="Sprint"
        isExpanded={expandedSections.sprint}
        onToggle={() => toggleSection('sprint')}
        content={
          <div className="space-y-3">
            <div>
              <h4 className="text-sm font-semibold text-white mb-2">Sprint Result</h4>
              <div className="space-y-1">
                <ScoringRow position="1st" points={8} />
                <ScoringRow position="2nd" points={7} />
                <ScoringRow position="3rd" points={6} />
                <ScoringRow position="4th" points={5} />
                <ScoringRow position="5th" points={4} />
                <ScoringRow position="6th" points={3} />
                <ScoringRow position="7th" points={2} />
                <ScoringRow position="8th" points={1} />
                <ScoringRow position="9th - 20th" points={0} />
                <ScoringRow position="DNF/DSQ" points={-10} />
              </div>
            </div>

            <div className="pt-2 border-t border-slate-600">
              <h4 className="text-sm font-semibold text-white mb-2">Sprint Bonuses</h4>
              <div className="space-y-1 text-sm text-gray-400">
                <div className="flex justify-between">
                  <span>Positions Gained:</span>
                  <span className="text-white font-semibold">+1 per position</span>
                </div>
                <div className="flex justify-between">
                  <span>Positions Lost:</span>
                  <span className="text-white font-semibold">-1 per position</span>
                </div>
                <div className="flex justify-between text-yellow-500/80">
                  <span>Overtakes Made (Estimated):</span>
                  <span className="font-semibold">+1 per overtake</span>
                </div>
                <div className="flex justify-between">
                  <span>Fastest Lap:</span>
                  <span className="text-white font-semibold">+5</span>
                </div>
              </div>
            </div>
          </div>
        }
      />

      <ScoringSection
        title="Race"
        isExpanded={expandedSections.race}
        onToggle={() => toggleSection('race')}
        content={
          <div className="space-y-3">
            <div>
              <h4 className="text-sm font-semibold text-white mb-2">Race Result</h4>
              <div className="space-y-1">
                <ScoringRow position="1st" points={25} />
                <ScoringRow position="2nd" points={18} />
                <ScoringRow position="3rd" points={15} />
                <ScoringRow position="4th" points={12} />
                <ScoringRow position="5th" points={10} />
                <ScoringRow position="6th" points={8} />
                <ScoringRow position="7th" points={6} />
                <ScoringRow position="8th" points={4} />
                <ScoringRow position="9th" points={2} />
                <ScoringRow position="10th" points={1} />
                <ScoringRow position="11th - 20th" points={0} />
                <ScoringRow position="DNF/DSQ" points={-20} />
              </div>
            </div>

            <div className="pt-2 border-t border-slate-600">
              <h4 className="text-sm font-semibold text-white mb-2">Race Bonuses</h4>
              <div className="space-y-1 text-sm text-gray-400">
                <div className="flex justify-between">
                  <span>Positions Gained:</span>
                  <span className="text-white font-semibold">+1 per position</span>
                </div>
                <div className="flex justify-between">
                  <span>Positions Lost:</span>
                  <span className="text-white font-semibold">-1 per position</span>
                </div>
                <div className="flex justify-between text-yellow-500/80">
                  <span>Overtakes Made (Estimated):</span>
                  <span className="font-semibold">+1 per overtake</span>
                </div>
                <div className="flex justify-between">
                  <span>Fastest Lap:</span>
                  <span className="text-white font-semibold">+10</span>
                </div>
                <div className="flex justify-between">
                  <span>Driver of the Day:</span>
                  <span className="text-white font-semibold">+10</span>
                </div>
              </div>
            </div>
          </div>
        }
      />

      <ScoringSection
        title="Constructor Bonuses"
        isExpanded={expandedSections['constructor']}
        onToggle={() => toggleSection('constructor')}
        content={
          <div className="space-y-3">
            <div>
              <h4 className="text-sm font-semibold text-white mb-2">Pit Stop Times</h4>
              <div className="space-y-1 text-sm text-gray-400">
                <div className="flex justify-between">
                  <span>Under 2.0s:</span>
                  <span className="text-white font-semibold">+20 points</span>
                </div>
                <div className="flex justify-between">
                  <span>2.00 - 2.19s:</span>
                  <span className="text-white font-semibold">+10 points</span>
                </div>
                <div className="flex justify-between">
                  <span>2.20 - 2.49s:</span>
                  <span className="text-white font-semibold">+5 points</span>
                </div>
                <div className="flex justify-between">
                  <span>2.50 - 2.99s:</span>
                  <span className="text-white font-semibold">+2 points</span>
                </div>
                <div className="flex justify-between">
                  <span>Over 3.0s:</span>
                  <span className="text-white font-semibold">0 points</span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-600">
              <h4 className="text-sm font-semibold text-white mb-2">Special Bonuses</h4>
              <div className="space-y-1 text-sm text-gray-400">
                <div className="flex justify-between">
                  <span>Fastest Pit Stop:</span>
                  <span className="text-white font-semibold">+5 points</span>
                </div>
                <div className="flex justify-between">
                  <span>World Record (1.8s):</span>
                  <span className="text-white font-semibold">+15 points</span>
                </div>
                <div className="flex justify-between">
                  <span>Disqualified Driver:</span>
                  <span className="text-white font-semibold">-20 points</span>
                </div>
              </div>
            </div>
          </div>
        }
      />

      <div className="bg-slate-700/50 rounded-lg p-4 text-sm text-gray-400 space-y-3">
        <p>
          ⚠️ <strong className="text-white">Disclaimer:</strong> The fantasy points shown in this dashboard are an <strong>estimate/guess</strong>.
        </p>
        <p className="text-xs">
          Because official F1 lap-by-lap "Overtakes" data is strictly private and not available through public APIs, we use the difference between the starting grid and finishing position ("Positions Gained/Lost") as a proxy to calculate these points. Your actual official F1 Fantasy score may vary.
        </p>
      </div>
    </div>
  );
};

/**
 * ScoringSection component for collapsible scoring information sections
 */
interface ScoringSectionProps {
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
  content: React.ReactNode;
}

const ScoringSection: React.FC<ScoringSectionProps> = ({
  title,
  isExpanded,
  onToggle,
  content,
}) => (
  <div className="bg-slate-700/50 rounded-lg overflow-hidden border border-slate-600/50">
    <button
      onClick={onToggle}
      className="w-full p-4 flex items-center justify-between hover:bg-slate-700 transition-colors"
    >
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <svg
        className={`w-5 h-5 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </button>
    {isExpanded && <div className="px-4 pb-4 text-sm">{content}</div>}
  </div>
);

/**
 * ScoringRow component for displaying position and points
 */
interface ScoringRowProps {
  position: string;
  points: number;
}

const ScoringRow: React.FC<ScoringRowProps> = ({ position, points }) => (
  <div className="flex justify-between text-sm text-gray-400">
    <span>{position}</span>
    <span className={`font-semibold ${points > 0 ? 'text-green-400' : points < 0 ? 'text-red-400' : 'text-white'}`}>
      {points > 0 ? '+' : ''}{points} pts
    </span>
  </div>
);