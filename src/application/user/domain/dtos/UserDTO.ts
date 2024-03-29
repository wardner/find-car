import { MapProp } from 'ts-simple-automapper';

export class UserDTO {
  @MapProp()
  id: number;

  @MapProp()
  name: string;

  @MapProp()
  lastname: string;

  @MapProp()
  email: string;

  @MapProp()
  cedula: string;

  @MapProp()
  cel: string;

  @MapProp()
  role: string;

  @MapProp()
  token: string;
  
  @MapProp()
  isActive: boolean;
}




