import { ITableName } from "../repository/interfaces/table-name.interface";

 export class Restaurant implements ITableName {
     public tableName: string = this.constructor.name;
     
     public restaurantId: number;
     public createdAt: Date;
     public updatedAt: Date;
     public deletedAt: Date;
     public name: string;
     public description: string;
     public restaurantCategoryId: number;

 }