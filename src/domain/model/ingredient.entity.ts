import { ITableName } from "../repository/interfaces/table-name.interface";

 export class Ingredient implements ITableName {
     public tableName: string = this.constructor.name;
     
     public ingredientId: number;
     public createdAt: Date;
     public updatedAt: Date;
     public deletedAt: Date;
     public name: string;
     public quantity: number;
     public menuItemId: number;

 }