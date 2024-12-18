import React from 'react';
import { VehicleType } from '../types/store';

interface FilterButtonsProps {
  activeFilter: VehicleType | 'all';
  onFilterChange: (filter: VehicleType | 'all') => void;
}

export const FilterButtons: React.FC<FilterButtonsProps> = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="flex gap-2 mb-2">
      <button
        onClick={() => onFilterChange('all')}
        className={`px-3 py-1 text-sm rounded-md transition-colors ${
          activeFilter === 'all'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
        }`}
      >
        All Runs
      </button>
      <button
        onClick={() => onFilterChange('box-truck')}
        className={`px-3 py-1 text-sm rounded-md transition-colors ${
          activeFilter === 'box-truck'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
        }`}
      >
        Box Truck Runs
      </button>
      <button
        onClick={() => onFilterChange('tractor-trailer')}
        className={`px-3 py-1 text-sm rounded-md transition-colors ${
          activeFilter === 'tractor-trailer'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
        }`}
      >
        Tractor Trailer Runs
      </button>
    </div>
  );
};