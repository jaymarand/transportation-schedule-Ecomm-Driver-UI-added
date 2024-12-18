import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

interface DriverActionsProps {
  storeId: string;
  onAction: (action: string, data?: any) => void;
}

export const DriverActions: React.FC<DriverActionsProps> = ({ storeId, onAction }) => {
  const [sealNumber1, setSealNumber1] = useState('');
  const [sealNumber2, setSealNumber2] = useState('');
  const [notes, setNotes] = useState('');
  const { user } = useAuth();

  const handleToteAction = (action: 'load' | 'unload') => {
    if (!sealNumber1 || !sealNumber2) {
      alert('Please enter both seal numbers');
      return;
    }

    onAction('tote', {
      action,
      storeId,
      driverId: user?.id,
      sealNumber1,
      sealNumber2,
      notes,
      timestamp: new Date().toISOString()
    });

    setSealNumber1('');
    setSealNumber2('');
    setNotes('');
  };

  return (
    <div className="space-y-4 p-4 bg-white rounded-lg shadow">
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => onAction('startLoading')}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Start Loading
        </button>
        <button
          onClick={() => onAction('preloaded')}
          className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700"
        >
          Preloaded
        </button>
        <button
          onClick={() => onAction('depart')}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Depart
        </button>
      </div>

      <div className="border-t pt-4">
        <h3 className="font-medium mb-2">E-commerce Totes</h3>
        <div className="space-y-2">
          <div>
            <label className="block text-sm">Seal Number 1</label>
            <input
              type="text"
              value={sealNumber1}
              onChange={(e) => setSealNumber1(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm">Seal Number 2</label>
            <input
              type="text"
              value={sealNumber2}
              onChange={(e) => setSealNumber2(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm">Notes</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              rows={2}
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => handleToteAction('load')}
              className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            >
              Load Tote
            </button>
            <button
              onClick={() => handleToteAction('unload')}
              className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            >
              Unload Tote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};