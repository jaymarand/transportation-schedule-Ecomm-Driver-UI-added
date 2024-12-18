import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ContainerCount } from '../types/containerCount';
import { useAuth } from '../contexts/AuthContext';
import { initialParLevels } from '../data/parLevels';

export const ContainerCountPage: React.FC = () => {
  const { user } = useAuth();
  const [selectedStore, setSelectedStore] = useState(user?.storeId || '');
  const [submitter, setSubmitter] = useState(user?.name || '');
  const [count, setCount] = useState<Partial<ContainerCount>>({
    hardlines_raw: 0,
    softlines_raw: 0,
    full_canvas_carts: 0,
    sleeves_gaylords: 0,
    caps_gaylords: 0,
    z_racks: 0,
    totes: 0,
    donation_calls: 0,
    opener_name: '',
    arrival_time: '',
    truck_status: 0
  });

  const handleInputChange = (field: keyof Partial<ContainerCount>, value: number | string) => {
    setCount(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const submission = {
      ...count,
      store_id: selectedStore,
      submitter,
      timestamp: new Date().toISOString()
    };
    console.log('Submitted count:', submission);
    // TODO: Add API call to save the container count
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold text-blue-900">Container Count</h1>
              <Link
                to="/"
                className="flex items-center gap-1 px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back to Dashboard
              </Link>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Store</label>
                <select
                  value={selectedStore}
                  onChange={(e) => setSelectedStore(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  required
                  disabled={user?.role === 'store'}
                >
                  <option value="">Select Store</option>
                  {initialParLevels.map((store) => (
                    <option key={store.storeId} value={store.storeId}>
                      {store.storeName}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Submitted By</label>
                <input
                  type="text"
                  value={submitter}
                  onChange={(e) => setSubmitter(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Hardlines Raw</label>
                <input
                  type="number"
                  min="0"
                  value={count.hardlines_raw}
                  onChange={(e) => handleInputChange('hardlines_raw', parseInt(e.target.value) || 0)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Softlines Raw</label>
                <input
                  type="number"
                  min="0"
                  value={count.softlines_raw}
                  onChange={(e) => handleInputChange('softlines_raw', parseInt(e.target.value) || 0)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Canvas Carts</label>
                <input
                  type="number"
                  min="0"
                  value={count.full_canvas_carts}
                  onChange={(e) => handleInputChange('full_canvas_carts', parseInt(e.target.value) || 0)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Sleeves (Gaylords)</label>
                <input
                  type="number"
                  min="0"
                  value={count.sleeves_gaylords}
                  onChange={(e) => handleInputChange('sleeves_gaylords', parseInt(e.target.value) || 0)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Caps (Gaylords)</label>
                <input
                  type="number"
                  min="0"
                  value={count.caps_gaylords}
                  onChange={(e) => handleInputChange('caps_gaylords', parseInt(e.target.value) || 0)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Z-Racks</label>
                <input
                  type="number"
                  min="0"
                  value={count.z_racks}
                  onChange={(e) => handleInputChange('z_racks', parseInt(e.target.value) || 0)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Totes</label>
                <input
                  type="number"
                  min="0"
                  value={count.totes}
                  onChange={(e) => handleInputChange('totes', parseInt(e.target.value) || 0)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Donation Calls</label>
                <input
                  type="number"
                  min="0"
                  value={count.donation_calls}
                  onChange={(e) => handleInputChange('donation_calls', parseInt(e.target.value) || 0)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Opener's Name</label>
                <input
                  type="text"
                  value={count.opener_name}
                  onChange={(e) => handleInputChange('opener_name', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Arrival Time</label>
                <input
                  type="time"
                  value={count.arrival_time}
                  onChange={(e) => handleInputChange('arrival_time', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Truck Status (%)</label>
              <input
                type="number"
                min="0"
                max="100"
                value={count.truck_status}
                onChange={(e) => handleInputChange('truck_status', parseInt(e.target.value) || 0)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700 transition-colors"
              >
                Submit Container Count
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};