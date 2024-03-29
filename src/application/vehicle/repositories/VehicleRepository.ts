import { EntityRepository, Repository } from 'typeorm';
import { Vehicle } from '../../../database/entities/Vehicle';

@EntityRepository(Vehicle)
export class VehicleRepository extends Repository<Vehicle> {
  public getAll = async(): Promise<Vehicle[]> =>
    await this.manager.getRepository(Vehicle).find({
      select: ["id", "brand", "model", "year", "date", "sectorid", "lostlocation", "picture"],
      relations: ["brand", "model"]
    });

  public updateVehicle = async(vehicle: Vehicle, updates: any): Promise<Vehicle|undefined> =>
    this.manager.getRepository(Vehicle).merge(vehicle, updates);

  public deleteVehicle = async(id: number) =>
    this.manager.getRepository(Vehicle).delete({ id });

  public getById = async (id: number): Promise<Vehicle|undefined> =>
    await this.manager.getRepository(Vehicle)
      .findOne({select: ["id", "brand", "model", "year", "date", "lostlocation",
      "description", "niv", "color", "pub_status", "plate", "userId", "picture", "user"], 
    where: {id: `${id}`}, relations: ["brand", "model", "comment", "user"]})

  public getByIdC = async (id: number) =>
    await this.manager.getRepository(Vehicle)
      .findOne(id)

  public getByIdUser = async (id: number): Promise<Vehicle|undefined> =>
    await this.manager.getRepository(Vehicle)
      .findOne({select: ["id", "year", "niv", "user"], 
        where: {id: `${id}`}, relations: ["user"]})
  
}
