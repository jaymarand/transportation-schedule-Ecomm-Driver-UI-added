import React from 'react';
import { Plus } from 'lucide-react';
import { Period } from '../types/store';

interface AddStoreButtonProps {
  period: Period;
  onAdd: (period: Period) => void;
}

export const AddStoreButton: React.FC<AddStoreButtonProps> = ({ period, onAdd }) => {
  return (
    <button
      onClick={() => onAdd(period)}
      className="flex items-center gap-1 px-3 py-1 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors"
    >
      <Plus className="w-3.5 h-3.5" />
      Add Run
    </button>
  );
};