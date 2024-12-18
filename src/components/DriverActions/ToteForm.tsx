import React, { useState } from 'react';

interface ToteFormProps {
  onSubmit: (action: 'load' | 'unload', data: any) => void;
  onCancel: () => void;
}

export const ToteForm: React.FC<ToteFormProps> = ({ onSubmit, onCancel }) => {
  const [action, setAction] = useState<'load' | 'unload'>('load');
  const [sealNumber1, setSealNumber1] = useState('');
  const [sealNumber2, setSealNumber2] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!sealNumber1 || !sealNumber2) {
      alert('Please enter both seal numbers');
      return;
    }

    onSubmit(action, {
      sealNumber1,
      sealNumber2,
      notes
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 border-t pt-4">
      <h3 className="font-medium">E-commerce Totes</h3>
      
      <div className="flex gap-2 mb-4">
        <button
          type="button"
          onClick={() => setAction('load')}
          className={`flex-1 px-3 py-1 rounded-md ${
            action === 'load'
              ? 'bg-purple-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Load
        </button>
        <button
          type="button"
          onClick={() => setAction('unload')}
          className={`flex-1 px-3 py-1 rounded-md ${
            action === 'unload'
              ? 'bg-purple-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Unload
        </button>
      </div>

      <div className="space-y-2">
        <div>
          <label className="block text-sm">Seal Number 1</label>
          <input
            type="text"
            value={sealNumber1}
            onChange={(e) => setSealNumber1(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm">Seal Number 2</label>
          <input
            type="text"
            value={sealNumber2}
            onChange={(e) => setSealNumber2(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm">Notes</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
            rows={2}
          />
        </div>
      </div>

      <div className="flex gap-2 pt-2">
        <button
          type="submit"
          className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};