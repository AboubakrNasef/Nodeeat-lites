export class Ingredient {
  constructor(
    public ingredientId: number,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt: Date,
    public name: string,
    public quantity: number,
    public menuItemId: number,
  ) {}
}
