export class RestaurantCategory {
  constructor(
    public restaurantCategoryId: number,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt: Date,
    public name: string,
  ) {}
}
