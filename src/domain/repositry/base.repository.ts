import { IRepository } from "./interfaces/repository.interface";
import { ClassConstructor } from "../core/interfaces/class-constructor.interface";

export class Repository<T extends ClassConstructor> implements IRepository<T> {
  private constructor(
    private readonly entity: T,
    private readonly dbContext: any
  ) {}

  /**
   * Find a record by its ID.
   *
   * @param {number} id - the ID of the record to find
   * @return {Promise<T | null>} the found record, or null if not found
   */
  async findById(id: number): Promise<T | null> {
    throw new Error("Method not implemented.");
  }

  /**
   * Find all items.
   *
   * @return {Promise<T[]>} array of items
   */
  async findAll(): Promise<T[]> {
    throw new Error("Method not implemented.");
  }

  /**
   * Save the entity asynchronously.
   *
   * @param {T} entity - the entity to be saved
   * @return {Promise<T>} a promise that resolves to the saved entity
   */
  async save(entity: T): Promise<T> {
    throw new Error("Method not implemented.");
  }

  /**
   * Update the entity.
   *
   * @param {T} entity - the entity to be updated
   * @return {Promise<T>} the updated entity
   */
  async update(entity: T): Promise<T> {
    throw new Error("Method not implemented.");
  }

  /**
   * Delete an item by its ID.
   *
   * @param {number} id - The ID of the item to be deleted
   * @return {Promise<void>} A Promise that resolves when the deletion is complete
   */
  async delete(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
