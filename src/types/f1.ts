export interface Driver {
  id: string;
  name: string;
  age: number;
  number: number;
  team: string;
}

export interface DriverWithStats extends Driver {
  fantasyPoints: number;
  championshipPoints: number;
}

export interface ConstructorData {
  name: string;
  fantasyPoints: number;
  drivers: string[];
  color: string;
}

export interface PointBreakdown {
  total: number;
  raceBase: number;
  qualiBase: number;
  posDelta: number;
  fastestLap: number;
  penalties: number;
}

export interface NextRace {
  name: string;
  date: string;
  circuit: string;
  circuitId: string;
}

export interface CircuitHistoryProps {
  circuitId: string;
  circuitName: string;
}

export interface TrackRecord {
  driver: DriverWithStats;
  bd2025: PointBreakdown | null;
  bd2024: PointBreakdown | null;
  bd2023: PointBreakdown | null;
  best: number;
}

export interface ConstructorStandingsProps {
  constructors: ConstructorData[];
}

export interface CountdownProps {
  targetDate: string;
  raceName: string;
  raceInfo: string;
}

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface RowProps {
  record: TrackRecord;
  onSelectBreakdown: (data: { driverName: string; year: number; breakdown: PointBreakdown }) => void;
}