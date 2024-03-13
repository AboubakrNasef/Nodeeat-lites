export class Restaurant {
  constructor(
    public restaurantId: number,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt: Date,
    public name: string,
    public description: string,
    public restaurantCategoryId: number,
  ) {}
}
