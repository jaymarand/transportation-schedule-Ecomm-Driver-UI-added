import { Store } from '../types/store';

export const exportToCSV = (stores: Store[]) => {
  const headers = [
    'Period',
    'Store',
    'Status',
    'Vehicle Type',
    'Sleeves',
    'Caps',
    'Canvases',
    'Totes',
    'Hardlines Raw',
    'Softlines Raw',
    'FL Driver',
    'Start Time',
    'Preload Time',
    'Complete Time',
    'Tractor',
    'Trailer',
    'Dock',
    'Depart Time',
    'Return Trailer'
  ];

  const rows = stores.map(store => [
    store.period,
    store.name,
    store.status,
    store.vehicleType === 'box-truck' ? 'Box Truck' : 'Tractor Trailer',
    store.sleeves,
    store.caps,
    store.canvases,
    store.totes,
    store.hardlinesRaw,
    store.softlinesRaw,
    store.flDriver,
    store.startTime || '',
    store.preloadTime || '',
    store.completeTime || '',
    store.tractor,
    store.trailer,
    store.dock,
    store.departTime || '',
    store.returnTrailer
  ]);

  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const now = new Date();
  const time = now.toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true 
  });
  const date = now.toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric'
  });
  
  link.href = URL.createObjectURL(blob);
  link.download = `(${time}) Transportation Schedule (${date}).csv`;
  link.click();
};