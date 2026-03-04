import React from 'react';

interface LoadingProps {
  message?: string;
}

/**
 * Loading component displays an animated spinner with optional message
 * Used when fetching data from the F1 API
 */
export const Loading: React.FC<LoadingProps> = ({ message = 'Loading F1 data...' }) => (
  <div className="flex flex-col items-center justify-center h-64">
    <div className="mb-4">
      <div className="w-12 h-12 border-4 border-gray-600 border-t-red-500 rounded-full animate-spin"></div>
    </div>

    <p className="text-gray-400 text-sm">{message}</p>
  </div>
);
