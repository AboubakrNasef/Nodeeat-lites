import { ITableName } from "../repository/interfaces/table-name.interface";

 export class Order implements ITableName {
     public tableName: string = this.constructor.name;
     
     public orderId: number;
     public createdAt: Date;
     public updatedAt: Date;
     public deletedAt: Date;
     public totalAmount: number;
     public quantity: number;
     public status: string;
     public customerId: number;
     public restaurantBranchId: number;

 }