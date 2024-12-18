import React, { useState, useEffect } from 'react';
import { Store, StoreStatus, VehicleType, Period } from '../types/store';
import { Clock } from 'lucide-react';
import { getCurrentDateTime } from '../utils/dateUtils';
import { FilterButtons } from './FilterButtons';
import { StoreTable } from './StoreTable';
import { ExportButtons } from './ExportButtons';
import { initialStores } from '../data/initialStores';

const nextStatus: Record<StoreStatus, StoreStatus> = {
  upcoming: 'preloaded',
  preloaded: 'complete',
  complete: 'canceled',
  canceled: 'upcoming'
};

export const Dashboard: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(getCurrentDateTime());
  const [stores, setStores] = useState<Store[]>(initialStores);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<VehicleType | 'all'>('all');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getCurrentDateTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleStatusChange = (storeId: string) => {
    setStores(prevStores => prevStores.map(store => {
      if (store.id === storeId) {
        const newStatus = nextStatus[store.status];
        if (newStatus === 'upcoming') {
          return {
            ...store,
            status: newStatus,
            startTime: null,
            preloadTime: null,
            completeTime: null
          };
        }
        return {
          ...store,
          status: newStatus
        };
      }
      return store;
    }));
  };

  const handleNameEdit = (storeId: string, newName: string) => {
    setStores(prevStores =>
      prevStores.map(store =>
        store.id === storeId ? { ...store, name: newName } : store
      )
    );
    setEditingId(null);
  };

  const handleTimeUpdate = (
    storeId: string, 
    field: 'startTime' | 'preloadTime' | 'completeTime' | 'departTime', 
    time: string
  ) => {
    setStores(prevStores =>
      prevStores.map(store =>
        store.id === storeId ? { ...store, [field]: time } : store
      )
    );
  };

  const handleFieldUpdate = (storeId: string, field: keyof Store, value: any) => {
    setStores(prevStores =>
      prevStores.map(store =>
        store.id === storeId ? { ...store, [field]: value } : store
      )
    );
  };

  const handleAddStore = (period: Period) => {
    const newStore: Store = {
      id: Date.now().toString(),
      name: 'New Store',
      status: 'upcoming',
      gaylords: 0,
      caps: 0,
      canvases: 0,
      totes: 0,
      flDriver: 'Driver',
      startTime: null,
      preloadTime: null,
      completeTime: null,
      tractor: '',
      trailer: '',
      dock: '',
      departTime: null,
      returnTrailer: '',
      period,
      vehicleType: 'box-truck'
    };

    setStores(prevStores => [...prevStores, newStore]);
    setEditingId(newStore.id);
  };

  const filteredStores = stores.filter(store => 
    activeFilter === 'all' || store.vehicleType === activeFilter
  );

  return (
    <div className="min-h-screen bg-gray-100 p-2">
      <div className="w-full mx-auto">
        <div id="dashboard-content" className="bg-white rounded-lg shadow-md min-w-[1200px]">
          <div className="p-3 border-b border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <h1 className="text-xl font-bold text-blue-900">Transportation Schedule</h1>
                <ExportButtons stores={stores} />
              </div>
              <div className="flex items-center gap-1.5 text-gray-600 bg-gray-50 px-3 py-1.5 rounded-md">
                <Clock className="w-4 h-4" />
                <span className="font-medium text-sm">{currentTime}</span>
              </div>
            </div>
            <FilterButtons activeFilter={activeFilter} onFilterChange={setActiveFilter} />
          </div>
          
          <div className="p-3 space-y-4">
            <StoreTable
              stores={filteredStores}
              period="MORNING"
              onStatusChange={handleStatusChange}
              onNameEdit={handleNameEdit}
              editingId={editingId}
              setEditingId={setEditingId}
              onTimeUpdate={handleTimeUpdate}
              onFieldUpdate={handleFieldUpdate}
              onAddStore={handleAddStore}
            />
            <StoreTable
              stores={filteredStores}
              period="AFTERNOON"
              onStatusChange={handleStatusChange}
              onNameEdit={handleNameEdit}
              editingId={editingId}
              setEditingId={setEditingId}
              onTimeUpdate={handleTimeUpdate}
              onFieldUpdate={handleFieldUpdate}
              onAddStore={handleAddStore}
            />
            <StoreTable
              stores={filteredStores}
              period="ADC"
              onStatusChange={handleStatusChange}
              onNameEdit={handleNameEdit}
              editingId={editingId}
              setEditingId={setEditingId}
              onTimeUpdate={handleTimeUpdate}
              onFieldUpdate={handleFieldUpdate}
              onAddStore={handleAddStore}
            />
          </div>
        </div>
      </div>
    </div>
  );
};