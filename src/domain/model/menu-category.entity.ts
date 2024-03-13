export class MenuCategory {
  constructor(
    public menuCategoryId: number,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt: Date,
    public name: string,
  ) {}
}
