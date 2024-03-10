import { ITableName } from "../repository/interfaces/table-name.interface";

 export class Customer implements ITableName {
     public tableName: string = this.constructor.name;
     
     public customerId: number;
     public createdAt: Date;
     public updatedAt: Date;
     public deletedAt: Date;
     public isActive: boolean;
     public userId: number;

 }