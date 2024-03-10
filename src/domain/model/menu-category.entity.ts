import { ITableName } from "../repository/interfaces/table-name.interface";

 export class MenuCategory implements ITableName {
     public tableName: string = this.constructor.name;
     
     public menuCategoryId: number;
     public createdAt: Date;
     public updatedAt: Date;
     public deletedAt: Date;
     public name: string;

 }