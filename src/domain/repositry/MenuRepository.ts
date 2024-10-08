import { FindOptionsWhere, Repository } from "typeorm";
import { Menu } from "../models/Menu";
import { BaseRepository } from "./base.repository";
import { dbContext } from "./database/db-context";
import { IPaginationOptions } from "./IPaginationOptions";

export class MenuRepository extends BaseRepository<Menu> {
  constructor(private readonly menuRepository: Repository<Menu>) {
    super(menuRepository);
  }

  getMany(where: FindOptionsWhere<Menu>) {
    return this.menuRepository.findBy(where);
  }
}

export const menuRepository = new MenuRepository(dbContext.getRepository(Menu));
