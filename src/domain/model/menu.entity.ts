export class Menu {
  constructor(
    public menuId: number,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt: Date,
    public name: string,
    public description: string,
    public menuCategoryId: number,
    public restaurantId: number,
  ) {}
}
