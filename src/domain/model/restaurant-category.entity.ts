import { ITableName } from "../repository/interfaces/table-name.interface";

 export class RestaurantCategory implements ITableName {
     public tableName: string = this.constructor.name;
     
     public restaurantCategoryId: number;
     public createdAt: Date;
     public updatedAt: Date;
     public deletedAt: Date;
     public name: string;

 }