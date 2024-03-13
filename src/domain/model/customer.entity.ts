export class Customer {
  constructor(
    public customerId: number,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt: Date,
    public isActive: boolean,
    public userId: number,
  ) {}
}
