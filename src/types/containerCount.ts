export interface ContainerCount {
  count_id: string;
  store_id: string;
  timestamp: string;
  hardlines_raw: number;
  softlines_raw: number;
  full_canvas_carts: number;
  sleeves_gaylords: number;
  caps_gaylords: number;
  z_racks: number;
  totes: number;
  donation_calls: number;
  opener_name: string;
  arrival_time: string;
  truck_status: number;
}

export type ContainerCounts = ContainerCount[];