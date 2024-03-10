import { ITableName } from "../repository/interfaces/table-name.interface";

 export class Role implements ITableName {
     public tableName: string = this.constructor.name;
     
     public roleId: number;
     public createdAt: Date;
     public updatedAt: Date;
     public deletedAt: Date;
     public title: string;

 }