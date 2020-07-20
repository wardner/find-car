import { MapProp } from 'ts-simple-automapper';

export class VehicleDTO {
  @MapProp()
  id: number;

  @MapProp()
  brand: string;

  @MapProp()
  model: string;

  @MapProp()
  plate: string;

  @MapProp()
  niv: string;

  @MapProp()
  color: string;

  @MapProp()
  year: number;

  @MapProp()
  lostlocation: {
    lat: string,
    lon: string
  };

  @MapProp()
  date: Date;

  @MapProp()
  picture: {
    url: string,
    id: string
  };

  @MapProp()
  description: string;

  @MapProp()
  pub_status: string;

  @MapProp()
  user: number;
}