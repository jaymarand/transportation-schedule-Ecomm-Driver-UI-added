import React from 'react';

interface ActionButtonsProps {
  onAction: (action: string) => void;
  onToteClick: () => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ onAction, onToteClick }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <button
        onClick={() => onAction('startLoading')}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Start Loading
      </button>
      <button
        onClick={() => onAction('preloaded')}
        className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors"
      >
        Preloaded
      </button>
      <button
        onClick={() => onAction('depart')}
        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
      >
        Depart
      </button>
      <button
        onClick={onToteClick}
        className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
      >
        E-commerce Totes
      </button>
    </div>
  );
};