import React, { useState } from 'react';
import { StoreStatus } from '../types/store';

interface StatusCellProps {
  status: StoreStatus;
  onClick: () => void;
  name: string;
  onNameEdit: (newName: string) => void;
  isEditing: boolean;
}

const statusColors: Record<StoreStatus, string> = {
  upcoming: 'bg-gray-200',
  preloaded: 'bg-yellow-200',
  complete: 'bg-green-200',
  canceled: 'bg-red-200'
};

export const StatusCell: React.FC<StatusCellProps> = ({ 
  status, 
  onClick, 
  name, 
  onNameEdit, 
  isEditing 
}) => {
  const [editValue, setEditValue] = useState(name);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onNameEdit(editValue);
    }
  };

  const handleBlur = () => {
    onNameEdit(editValue);
  };

  if (isEditing) {
    return (
      <input
        type="text"
        className="border rounded px-1 py-0.5 w-full text-xs"
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
        onKeyPress={handleKeyPress}
        onBlur={handleBlur}
        autoFocus
      />
    );
  }

  return (
    <div className="flex items-center space-x-2">
      <button
        className="hover:text-blue-600 min-w-[100px] text-left text-xs"
        onClick={() => onNameEdit(name)}
      >
        {name}
      </button>
      <button
        onClick={onClick}
        className={`px-1.5 py-0.5 rounded ${statusColors[status]} 
          hover:opacity-80 transition-opacity text-xs`}
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </button>
    </div>
  );
};