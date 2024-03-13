export class Cart {
  constructor(
    public cartId: number,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt: Date,
    public totalAmount: number,
    public quantity: number,
    public customerId: number,
  ) {}
}
