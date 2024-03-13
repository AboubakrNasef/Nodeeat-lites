export class Review {
  constructor(
    public reviewId: number,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt: Date,
    public title: string,
    public description: string,
    public menuItemId: number,
    public customerId: number,
  ) {}
}
