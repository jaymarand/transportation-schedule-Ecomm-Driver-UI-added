import React from 'react';
import { ParLevel } from '../../types/parLevel';

interface SortableHeaderProps {
  field: keyof ParLevel;
  label: string;
  currentSort: keyof ParLevel;
  direction: 'asc' | 'desc';
  onSort: (field: keyof ParLevel) => void;
}

export const SortableHeader: React.FC<SortableHeaderProps> = ({
  field,
  label,
  currentSort,
  direction,
  onSort,
}) => {
  return (
    <th
      onClick={() => onSort(field)}
      className="px-2 py-1 text-left text-xs font-semibold text-blue-800 border border-gray-200 cursor-pointer hover:bg-blue-100"
    >
      {label} {currentSort === field && (direction === 'asc' ? '↑' : '↓')}
    </th>
  );
};