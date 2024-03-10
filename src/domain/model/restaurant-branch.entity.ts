import { ITableName } from "../repository/interfaces/table-name.interface";

 export class RestaurantBranch implements ITableName {
     public tableName: string = this.constructor.name;
     
     public restaurantBranchId: number;
     public createdAt: Date;
     public updatedAt: Date;
     public deletedAt: Date;
     public status: string;
     public openingTime: Date;
     public closingTime: Date;
     public addressId: number;
     public restaurantId: number;

 }