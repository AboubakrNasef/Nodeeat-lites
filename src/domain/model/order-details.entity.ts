import { ITableName } from "../repository/interfaces/table-name.interface";

 export class OrderDetails implements ITableName {
     public tableName: string = this.constructor.name;
     
     public orderDetailsId: number;
     public createdAt: Date;
     public updatedAt: Date;
     public deletedAt: Date;
     public unitPrice: number;
     public quantity: number;
     public totalAmount: number;
     public orderId: number;
     public menuItemId: number;

 }