import "reflect-metadata";
import { DataSource, ObjectLiteral } from "typeorm";
import dotenv from "dotenv";
import { Customer } from "../../models/customer.entity";
import { MenuItem } from "../../models/menu-item.entity";
import { Cart } from "../../models/cart.entity";
import { CartItem } from "../../models/cart-item.entity";
import { Order } from "../../models/Order";
import { OrderDetails } from "../../models/OrderDetails";
import { OrderStatus } from "../../models/OrderStatus";

dotenv.config();

class DBContext {
  private readonly AppDBContext: DataSource;

  constructor(url: string) {
    this.AppDBContext = new DataSource({
      type: "postgres",
      url: url,
      entities: [
        Customer,
        MenuItem,
        Cart,
        CartItem,
        Order,
        OrderDetails,
        OrderStatus,
      ],
      synchronize: true,
      logging: true,
    });
  }
  queryBuilder() {
    return this.AppDBContext;
  }
  async connect() {
    await this.AppDBContext.initialize();
  }

  disconnect() {
    return this.AppDBContext.destroy();
  }

  getRepository<T extends ObjectLiteral>(entity: any) {
    return this.AppDBContext.getRepository<T>(entity);
  }
}

export const dbContext = new DBContext(process.env.DATABASE_URL ?? "");
