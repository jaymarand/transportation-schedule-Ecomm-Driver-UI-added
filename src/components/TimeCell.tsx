import React from 'react';
import { getCurrentTime } from '../utils/dateUtils';

interface TimeCellProps {
  time: string | null;
  onTimeClick?: () => void;
  isClickable?: boolean;
}

export const TimeCell: React.FC<TimeCellProps> = ({ time, onTimeClick, isClickable = false }) => {
  return (
    <div 
      className={`px-2 py-0.5 text-xs ${isClickable ? 'cursor-pointer hover:bg-blue-50' : ''}`}
      onClick={isClickable ? onTimeClick : undefined}
    >
      {time || '-'}
    </div>
  );
};