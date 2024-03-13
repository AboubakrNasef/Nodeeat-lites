export class OrderDetails {
  constructor(
    public orderDetailsId: number,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt: Date,
    public unitPrice: number,
    public quantity: number,
    public totalAmount: number,
    public orderId: number,
    public menuItemId: number,
  ) {}
}
