import { ITableName } from "./table-name.interface";
import { ClassConstructor } from "../../core/interfaces/class-constructor.interface";

export interface IRepository<T extends ClassConstructor & ITableName> {
  findById(id: number): Promise<T | null>;
  findAll(): Promise<T[]>;
  save(entity: T): Promise<T>;
  update(entity: T): Promise<T>;
  delete(id: number): Promise<void>;
}
