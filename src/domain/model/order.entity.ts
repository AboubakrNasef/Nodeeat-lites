export class Order {
  constructor(
    public orderId: number,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt: Date,
    public totalAmount: number,
    public quantity: number,
    public status: string,
    public customerId: number,
    public restaurantBranchId: number,
  ) {}
}
