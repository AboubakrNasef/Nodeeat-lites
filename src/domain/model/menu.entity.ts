import { ITableName } from "../repository/interfaces/table-name.interface";

 export class Menu implements ITableName {
     public tableName: string = this.constructor.name;
     
     public menuId: number;
     public createdAt: Date;
     public updatedAt: Date;
     public deletedAt: Date;
     public name: string;
     public description: string;
     public menuCategoryId: number;
     public restaurantId: number;

 }