export class Address {
  constructor(
    public addressId: number,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt: Date,
    public city: string,
    public street: string,
    public fullAddress: string,
  ) {}
}
