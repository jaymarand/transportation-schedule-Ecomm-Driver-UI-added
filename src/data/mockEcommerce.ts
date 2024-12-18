import { EcommerceTote, ToteLog } from '../types/ecommerce';

export const mockTotes: EcommerceTote[] = [
  {
    id: '1',
    storeId: '9016',
    sealNumber1: 'A123456',
    sealNumber2: 'B123456',
    status: 'loaded',
    timestamp: '2024-03-19T08:30:00Z',
    driverId: 'D001',
    notes: 'Regular delivery'
  },
  {
    id: '2',
    storeId: '9019',
    sealNumber1: 'A789012',
    sealNumber2: 'B789012',
    status: 'unloaded',
    timestamp: '2024-03-19T09:15:00Z',
    driverId: 'D002',
    notes: 'Priority shipment'
  },
  {
    id: '3',
    storeId: '9014',
    sealNumber1: 'A345678',
    sealNumber2: 'B345678',
    status: 'loaded',
    timestamp: '2024-03-19T10:00:00Z',
    driverId: 'D001',
    notes: 'Multiple totes'
  }
];

export const mockToteLogs: ToteLog[] = [
  {
    id: '1',
    toteId: '1',
    action: 'loaded',
    timestamp: '2024-03-19T08:30:00Z',
    performedBy: 'John Driver',
    location: 'Oakley',
    sealNumbers: ['A123456', 'B123456'],
    notes: 'Regular delivery'
  },
  {
    id: '2',
    toteId: '2',
    action: 'loaded',
    timestamp: '2024-03-19T09:15:00Z',
    performedBy: 'Sarah Driver',
    location: 'Bellevue',
    sealNumbers: ['A789012', 'B789012'],
    notes: 'Priority shipment'
  },
  {
    id: '3',
    toteId: '2',
    action: 'unloaded',
    timestamp: '2024-03-19T11:30:00Z',
    performedBy: 'Sarah Driver',
    location: 'Bellevue',
    sealNumbers: ['A789012', 'B789012'],
    notes: 'Delivered successfully'
  },
  {
    id: '4',
    toteId: '3',
    action: 'loaded',
    timestamp: '2024-03-19T10:00:00Z',
    performedBy: 'John Driver',
    location: 'Independence',
    sealNumbers: ['A345678', 'B345678'],
    notes: 'Multiple totes'
  }
];