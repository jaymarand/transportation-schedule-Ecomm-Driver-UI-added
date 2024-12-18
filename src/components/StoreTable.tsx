import React from 'react';
import { Store, Period } from '../types/store';
import { StatusCell } from './StatusCell';
import { TimeCell } from './TimeCell';
import { EditableCell } from './EditableCell';
import { AddStoreButton } from './AddStoreButton';
import { getCurrentTime } from '../utils/dateUtils';

interface StoreTableProps {
  stores: Store[];
  period: Period;
  onStatusChange: (storeId: string) => void;
  onNameEdit: (storeId: string, newName: string) => void;
  editingId: string | null;
  setEditingId: (id: string | null) => void;
  onTimeUpdate: (storeId: string, field: 'startTime' | 'preloadTime' | 'completeTime' | 'departTime', time: string) => void;
  onFieldUpdate: (storeId: string, field: keyof Store, value: any) => void;
  onAddStore: (period: Period) => void;
}

const getRowColor = (store: Store) => {
  switch (store.status) {
    case 'complete':
      return 'bg-green-50 hover:bg-green-100';
    case 'preloaded':
      return 'bg-yellow-50 hover:bg-yellow-100';
    case 'canceled':
      return 'bg-red-50 hover:bg-red-100';
    default:
      return 'hover:bg-blue-50/30';
  }
};

export const StoreTable: React.FC<StoreTableProps> = ({
  stores,
  period,
  onStatusChange,
  onNameEdit,
  editingId,
  setEditingId,
  onTimeUpdate,
  onFieldUpdate,
  onAddStore,
}) => {
  const filteredStores = stores.filter((store) => store.period === period);

  const handlePreloadClick = (storeId: string) => {
    onTimeUpdate(storeId, 'preloadTime', getCurrentTime());
    onFieldUpdate(storeId, 'status', 'preloaded');
  };

  const handleCompleteClick = (storeId: string) => {
    onTimeUpdate(storeId, 'completeTime', getCurrentTime());
    onFieldUpdate(storeId, 'status', 'complete');
  };

  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <h2 className="text-lg font-semibold text-gray-700">
          {period === 'MORNING' ? 'Morning Runs' : period === 'AFTERNOON' ? 'Afternoon Runs' : 'ADC Runs'}
        </h2>
        <AddStoreButton period={period} onAdd={onAddStore} />
      </div>
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-2 py-1 text-left text-xs font-semibold text-blue-800 border border-gray-200">Retail Store</th>
              <th className="px-2 py-1 text-left text-xs font-semibold text-blue-800 border border-gray-200">Type</th>
              <th className="px-2 py-1 text-left text-xs font-semibold text-blue-800 border border-gray-200">Sleeves</th>
              <th className="px-2 py-1 text-left text-xs font-semibold text-blue-800 border border-gray-200">Caps</th>
              <th className="px-2 py-1 text-left text-xs font-semibold text-blue-800 border border-gray-200">Canvases</th>
              <th className="px-2 py-1 text-left text-xs font-semibold text-blue-800 border border-gray-200">Totes</th>
              <th className="px-2 py-1 text-left text-xs font-semibold text-blue-800 border border-gray-200">Hardlines Raw</th>
              <th className="px-2 py-1 text-left text-xs font-semibold text-blue-800 border border-gray-200">Softlines Raw</th>
              <th className="px-2 py-1 text-left text-xs font-semibold text-blue-800 border border-gray-200">FL Driver</th>
              <th className="px-2 py-1 text-left text-xs font-semibold text-blue-800 border border-gray-200">Start</th>
              <th className="px-2 py-1 text-left text-xs font-semibold text-blue-800 border border-gray-200">Preload</th>
              <th className="px-2 py-1 text-left text-xs font-semibold text-blue-800 border border-gray-200">Complete</th>
              <th className="px-2 py-1 text-left text-xs font-semibold text-blue-800 border border-gray-200">Tractor</th>
              <th className="px-2 py-1 text-left text-xs font-semibold text-blue-800 border border-gray-200">Trailer</th>
              <th className="px-2 py-1 text-left text-xs font-semibold text-blue-800 border border-gray-200">Dock</th>
              <th className="px-2 py-1 text-left text-xs font-semibold text-blue-800 border border-gray-200">Depart</th>
              <th className="px-2 py-1 text-left text-xs font-semibold text-blue-800 border border-gray-200">Return Trailer</th>
            </tr>
          </thead>
          <tbody>
            {filteredStores.map((store) => (
              <tr key={store.id} className={`transition-colors ${getRowColor(store)}`}>
                <td className="px-2 py-0.5 border border-gray-200">
                  <StatusCell
                    status={store.status}
                    onClick={() => onStatusChange(store.id)}
                    name={store.name}
                    onNameEdit={(newName) => onNameEdit(store.id, newName)}
                    isEditing={editingId === store.id}
                  />
                </td>
                <td className="px-2 py-0.5 border border-gray-200">
                  <select
                    value={store.vehicleType}
                    onChange={(e) => onFieldUpdate(store.id, 'vehicleType', e.target.value)}
                    className="border rounded px-1 py-0.5 text-xs w-full"
                  >
                    <option value="box-truck">Box Truck</option>
                    <option value="tractor-trailer">Tractor Trailer</option>
                  </select>
                </td>
                <td className="border border-gray-200">
                  <EditableCell
                    value={store.sleeves}
                    onSave={(value) => onFieldUpdate(store.id, 'sleeves', value)}
                    type="number"
                  />
                </td>
                <td className="border border-gray-200">
                  <EditableCell
                    value={store.caps}
                    onSave={(value) => onFieldUpdate(store.id, 'caps', value)}
                    type="number"
                  />
                </td>
                <td className="border border-gray-200">
                  <EditableCell
                    value={store.canvases}
                    onSave={(value) => onFieldUpdate(store.id, 'canvases', value)}
                    type="number"
                  />
                </td>
                <td className="border border-gray-200">
                  <EditableCell
                    value={store.totes}
                    onSave={(value) => onFieldUpdate(store.id, 'totes', value)}
                    type="number"
                  />
                </td>
                <td className="border border-gray-200">
                  <EditableCell
                    value={store.hardlinesRaw}
                    onSave={(value) => onFieldUpdate(store.id, 'hardlinesRaw', value)}
                    type="number"
                  />
                </td>
                <td className="border border-gray-200">
                  <EditableCell
                    value={store.softlinesRaw}
                    onSave={(value) => onFieldUpdate(store.id, 'softlinesRaw', value)}
                    type="number"
                  />
                </td>
                <td className="border border-gray-200">
                  <EditableCell
                    value={store.flDriver}
                    onSave={(value) => onFieldUpdate(store.id, 'flDriver', value)}
                  />
                </td>
                <td className="border border-gray-200">
                  <TimeCell 
                    time={store.startTime} 
                    isClickable={true}
                    onTimeClick={() => onTimeUpdate(store.id, 'startTime', getCurrentTime())}
                  />
                </td>
                <td className="border border-gray-200">
                  <TimeCell 
                    time={store.preloadTime}
                    isClickable={true}
                    onTimeClick={() => handlePreloadClick(store.id)}
                  />
                </td>
                <td className="border border-gray-200">
                  <TimeCell 
                    time={store.completeTime}
                    isClickable={true}
                    onTimeClick={() => handleCompleteClick(store.id)}
                  />
                </td>
                <td className="border border-gray-200">
                  <EditableCell
                    value={store.tractor}
                    onSave={(value) => onFieldUpdate(store.id, 'tractor', value)}
                  />
                </td>
                <td className="border border-gray-200">
                  <EditableCell
                    value={store.trailer}
                    onSave={(value) => onFieldUpdate(store.id, 'trailer', value)}
                  />
                </td>
                <td className="border border-gray-200">
                  <EditableCell
                    value={store.dock}
                    onSave={(value) => onFieldUpdate(store.id, 'dock', value)}
                  />
                </td>
                <td className="border border-gray-200">
                  <TimeCell 
                    time={store.departTime}
                    isClickable={true}
                    onTimeClick={() => onTimeUpdate(store.id, 'departTime', getCurrentTime())}
                  />
                </td>
                <td className="border border-gray-200">
                  <EditableCell
                    value={store.returnTrailer}
                    onSave={(value) => onFieldUpdate(store.id, 'returnTrailer', value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};