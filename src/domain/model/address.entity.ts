import { ITableName } from "../repository/interfaces/table-name.interface";

export class Address implements ITableName {
     public tableName: string = this.constructor.name;
     
     public addressId: number;
     public createdAt: Date;
     public updatedAt: Date;
     public deletedAt: Date;
     public city: string;
     public street: string;
     public fullAddress: string;

 }