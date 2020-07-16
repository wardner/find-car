declare interface VehiclePayload {
  id?: number;
  brand?: string;
  model?: string;
  plate?: string;
  niv?: string;
  color?: string;
  year?: number;
  lostlocation?: object;
  date?: Date;
  picture?: string;
  description?: string;
  pub_status?: string;
  user?: number;
}