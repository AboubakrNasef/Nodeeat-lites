import { ITableName } from "../repository/interfaces/table-name.interface";

 export class CartItem implements ITableName {
     public tableName: string = this.constructor.name;
     
     public cartItemId: number;
     public createdAt: Date;
     public updatedAt: Date;
     public deletedAt: Date;
     public unitPrice: number;
     public quantity: number;
     public totalAmount: number;
     public cartId: number;
     public menuItemId: number;

 }