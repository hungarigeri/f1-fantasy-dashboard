import React, { useState, useEffect } from 'react';
import type { CountdownProps, TimeLeft } from '../types/f1';


/**
 * Countdown component that displays a live countdown to the next race
 * Updates every second with days, hours, minutes, and seconds remaining
 */
export const Countdown: React.FC<CountdownProps> = ({ targetDate, raceName, raceInfo }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetTime = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();

    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-red-500/30 shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-2">{raceName}</h2>

      <p className="text-gray-400 text-sm mb-4">{raceInfo}</p>

      <div className="grid grid-cols-4 gap-3">
        <div className="text-center">
          <div className="bg-red-500/10 rounded-lg p-3 border border-red-500/30">
            <p className="text-3xl font-bold text-red-500">{timeLeft.days}</p>
            <p className="text-xs text-gray-400 uppercase mt-1">Days</p>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-red-500/10 rounded-lg p-3 border border-red-500/30">
            <p className="text-3xl font-bold text-red-500">{timeLeft.hours}</p>
            <p className="text-xs text-gray-400 uppercase mt-1">Hours</p>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-red-500/10 rounded-lg p-3 border border-red-500/30">
            <p className="text-3xl font-bold text-red-500">{timeLeft.minutes}</p>
            <p className="text-xs text-gray-400 uppercase mt-1">Minutes</p>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-red-500/10 rounded-lg p-3 border border-red-500/30">
            <p className="text-3xl font-bold text-red-500">{timeLeft.seconds}</p>
            <p className="text-xs text-gray-400 uppercase mt-1">Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};
