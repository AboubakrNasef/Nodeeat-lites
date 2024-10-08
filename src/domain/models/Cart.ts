import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BaseEntityTemp } from "./templates/base.temp";
import { Customer } from "./Customer";
import { CartItem } from "./CartItem";

@Entity("cart")
export class Cart extends BaseEntityTemp {
  @PrimaryGeneratedColumn({ name: "cart_id" })
  id: number;

  @Column({ name: "total_amount", type: "money" })
  totalAmount: number;

  @Column({ name: "customer_id" })
  customerId: number;
  @Column({ name: "isLocked", default: false })
  isLocked: boolean;
  @OneToOne(() => Customer, (customer) => customer.cart)
  @JoinColumn({ name: "customer_id" })
  customer: Customer;

  @OneToMany(() => CartItem, (cartItem) => cartItem.cart, { eager: true })
  cartItems: CartItem[];
}
