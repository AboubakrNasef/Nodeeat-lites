export class MenuItem {
  constructor(
    public menuItemId: number,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt: Date,
    public name: string,
    public description: string,
    public menuId: number,
    public menuCategoryId: number,
  ) {}
}
