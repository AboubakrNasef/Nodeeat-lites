export class CartItem {
  constructor(
    public cartItemId: number,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt: Date,
    public unitPrice: number,
    public quantity: number,
    public totalAmount: number,
    public cartId: number,
    public menuItemId: number,
  ) {}
}
