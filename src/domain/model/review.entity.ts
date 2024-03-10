import { ITableName } from "../repository/interfaces/table-name.interface";

 export class Review implements ITableName {
     public tableName: string = this.constructor.name;
     
     public reviewId: number;
     public createdAt: Date;
     public updatedAt: Date;
     public deletedAt: Date;
     public title: string;
     public description: string;
     public menuItemId: number;
     public customerId: number;

 }