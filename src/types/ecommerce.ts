export interface EcommerceTote {
  id: string;
  storeId: string;
  sealNumber1: string;
  sealNumber2: string;
  status: 'loaded' | 'unloaded';
  timestamp: string;
  driverId: string;
  notes?: string;
}

export interface ToteLog {
  id: string;
  toteId: string;
  action: 'loaded' | 'unloaded';
  timestamp: string;
  performedBy: string;
  location: string;
  sealNumbers: string[];
  notes?: string;
}