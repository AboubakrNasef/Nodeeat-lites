export class RestaurantBranch {
  constructor(
    public restaurantBranchId: number,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt: Date,
    public status: string,
    public openingTime: Date,
    public closingTime: Date,
    public addressId: number,
    public restaurantId: number,
  ) {}
}
