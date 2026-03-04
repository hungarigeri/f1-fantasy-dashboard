import { useEffect, useReducer } from 'react';
import type { NextRace } from '../types/f1';

type State = {
  nextRace: NextRace | null;
  loading: boolean;
};

type Action =
  | { type: 'LOADING' }
  | { type: 'SUCCESS'; payload: NextRace }
  | { type: 'FALLBACK' };

const initialState: State = {
  nextRace: null,
  loading: false,
};

export const fetchNextRaceFromAPI = async (): Promise<NextRace> => {
  const response = await fetch('https://api.jolpi.ca/ergast/f1/current.json');

  if (!response.ok) {
    throw new Error('API unreachable');
  }

  const data = await response.json();
  const races = data.MRData?.RaceTable?.Races;

  if (!races?.length) {
    throw new Error('No race data');
  }

  const now = new Date();

  const next =
    races.find((r: any) => new Date(r.date) > now) ||
    races[races.length - 1];

  return {
    name: next.raceName,
    date: next.date,
    circuit: next.Circuit.circuitName,
    circuitId: next.Circuit.circuitId,
  };
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: true };

    case 'SUCCESS':
      return { nextRace: action.payload, loading: false };
    default:
      return state;
  }
}

export const useNextRace = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const load = async () => {
      dispatch({ type: 'LOADING' });

      try {
        const race = await fetchNextRaceFromAPI();
        dispatch({ type: 'SUCCESS', payload: race });
      } catch {
        dispatch({ type: 'FALLBACK' });
      }
    };

    load();
  }, []);

  return state;
};