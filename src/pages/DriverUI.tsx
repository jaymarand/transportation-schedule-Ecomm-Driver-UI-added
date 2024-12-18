import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { DriverActions } from '../components/DriverActions';
import { useAuth } from '../contexts/AuthContext';
import { initialParLevels } from '../data/parLevels';

export const DriverUI: React.FC = () => {
  const { user } = useAuth();
  const [selectedStore, setSelectedStore] = useState('');

  const handleDriverAction = (action: string, data?: any) => {
    console.log('Driver action:', action, data);
    // TODO: Implement action handling
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold text-blue-900">Driver Actions</h1>
              <Link
                to="/"
                className="flex items-center gap-1 px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back to Dashboard
              </Link>
            </div>
          </div>
          
          <div className="p-4">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Select Store</label>
              <select
                value={selectedStore}
                onChange={(e) => setSelectedStore(e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                <option value="">Select a store...</option>
                {initialParLevels.map((store) => (
                  <option key={store.storeId} value={store.storeId}>
                    {store.storeName}
                  </option>
                ))}
              </select>
            </div>
            
            {selectedStore && (
              <DriverActions 
                storeId={selectedStore} 
                onAction={handleDriverAction} 
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};