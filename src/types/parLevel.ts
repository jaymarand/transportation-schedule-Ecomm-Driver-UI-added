export interface ParLevel {
  storeId: string;
  storeName: string;
  canvases: number;
  sleeves: number;
  caps: number;
  hardlinesRaw: number;
  softlinesRaw: number;
  totes: number;
}

export type ParLevels = ParLevel[];