import { ITableName } from "../repository/interfaces/table-name.interface";

 export class Cart implements ITableName {
     public tableName: string = this.constructor.name;
     
     public cartId: number;
     public createdAt: Date;
     public updatedAt: Date;
     public deletedAt: Date;
     public totalAmount: number;
     public quantity: number;
     public customerId: number;

 }