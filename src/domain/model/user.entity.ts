import { ITableName } from "../repository/interfaces/table-name.interface";

 export class User implements ITableName {
     public tableName: string = this.constructor.name;
     
     public userId: number;
     public createdAt: Date;
     public updatedAt: Date;
     public deletedAt: Date;
     public fullName: string;
     public email: string;
     public password: string;
     public addressId: number;
     public roleId: number;

 }