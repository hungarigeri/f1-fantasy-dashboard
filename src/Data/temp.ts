// 2026 F1 Grid - Complete Driver and Team Data

export interface Driver2026 {
  id: string;
  name: string;
  age: number;
  number: number;
  team: string;
}

export const drivers2026: Driver2026[] = [
  // McLaren
  { id: 'norris', name: 'Lando Norris', age: 26, number: 4, team: 'McLaren' },
  { id: 'piastri', name: 'Oscar Piastri', age: 24, number: 81, team: 'McLaren' },
  
  // Ferrari
  { id: 'leclerc', name: 'Charles Leclerc', age: 28, number: 16, team: 'Ferrari' },
  { id: 'hamilton', name: 'Lewis Hamilton', age: 41, number: 44, team: 'Ferrari' },
  
  // Red Bull
  { id: 'verstappen', name: 'Max Verstappen', age: 28, number: 1, team: 'Red Bull' },
  { id: 'hadjar', name: 'Isack Hadjar', age: 21, number: 9, team: 'Red Bull' },
  
  // Mercedes
  { id: 'russell', name: 'George Russell', age: 27, number: 63, team: 'Mercedes' },
  { id: 'antonelli', name: 'Andrea Kimi Antonelli', age: 19, number: 12, team: 'Mercedes' },
  
  // Aston Martin
  { id: 'alonso', name: 'Fernando Alonso', age: 44, number: 14, team: 'Aston Martin' },
  { id: 'stroll', name: 'Lance Stroll', age: 27, number: 18, team: 'Aston Martin' },
  
  // Alpine
  { id: 'gasly', name: 'Pierre Gasly', age: 29, number: 10, team: 'Alpine' },
  { id: 'colapinto', name: 'Franco Colapinto', age: 22, number: 43, team: 'Alpine' },
  
  // Haas
  { id: 'ocon', name: 'Esteban Ocon', age: 29, number: 31, team: 'Haas' },
  { id: 'bearman', name: 'Oliver Bearman', age: 20, number: 50, team: 'Haas' },
  
  // Racing Bulls
  { id: 'lawson', name: 'Liam Lawson', age: 23, number: 30, team: 'Racing Bulls' },
  { id: 'lindblad', name: 'Arvid Lindblad', age: 18, number: 60, team: 'Racing Bulls' },
  
  // Williams
  { id: 'albon', name: 'Alex Albon', age: 29, number: 23, team: 'Williams' },
  { id: 'sainz', name: 'Carlos Sainz', age: 31, number: 55, team: 'Williams' },
  
  // Sauber/Audi
  { id: 'hulkenberg', name: 'Nico Hülkenberg', age: 38, number: 27, team: 'Sauber' },
  { id: 'bortoleto', name: 'Gabriel Bortoleto', age: 21, number: 5, team: 'Sauber' },
  
  // Cadillac
  { id: 'perez', name: 'Sergio Pérez', age: 36, number: 11, team: 'Cadillac' },
  { id: 'bottas', name: 'Valtteri Bottas', age: 36, number: 77, team: 'Cadillac' },
];

export const teamColors: Record<string, string> = {
  'McLaren': '#FF8700',
  'Ferrari': '#DC0000',
  'Red Bull': '#0600EF',
  'Mercedes': '#00D2BE',
  'Aston Martin': '#006F62',
  'Alpine': '#0082FA',
  'Haas': '#FFFFFF',
  'Racing Bulls': '#6692FF',
  'Williams': '#005AFF',
  'Sauber': '#00D4BE',
  'Cadillac': '#FFC800',
};

export const teams2026 = [
  'McLaren',
  'Ferrari',
  'Red Bull',
  'Mercedes',
  'Aston Martin',
  'Alpine',
  'Haas',
  'Racing Bulls',
  'Williams',
  'Sauber',
  'Cadillac',
];
