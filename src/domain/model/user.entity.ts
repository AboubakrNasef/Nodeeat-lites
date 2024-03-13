export class User {
  constructor(
    public userId: number,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt: Date,
    public fullName: string,
    public email: string,
    public password: string,
    public addressId: number,
    public roleId: number,
  ) {}
}
