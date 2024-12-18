export type StoreStatus = 'upcoming' | 'preloaded' | 'complete' | 'canceled';
export type VehicleType = 'box-truck' | 'tractor-trailer';
export type Period = 'MORNING' | 'AFTERNOON' | 'ADC';

export interface Store {
  id: string;
  name: string;
  status: StoreStatus;
  sleeves: number;
  caps: number;
  canvases: number;
  totes: number;
  hardlinesRaw: number;
  softlinesRaw: number;
  flDriver: string;
  startTime: string | null;
  preloadTime: string | null;
  completeTime: string | null;
  tractor: string;
  trailer: string;
  dock: string;
  departTime: string | null;
  returnTrailer: string;
  period: Period;
  vehicleType: VehicleType;
}