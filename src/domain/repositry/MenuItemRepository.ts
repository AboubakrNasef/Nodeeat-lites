import { Repository } from "typeorm";

import { MenuItem } from "../models/menu-item.entity";
import { BaseRepository } from "./base.repository";
import { dbContext } from "./database/db-context";

export class MenuItemRepository extends BaseRepository<MenuItem> {
  constructor(private readonly MenuItemRepo: Repository<MenuItem>) {
    super(MenuItemRepo);
  }

  async findOneById(id: number): Promise<MenuItem | null> {
    return this.findOneBy({ id });
  }
}

export const menuItemRepository = new MenuItemRepository(
  dbContext.getRepository(MenuItem)
);
