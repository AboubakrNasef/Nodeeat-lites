export class Role {
  constructor(
    public roleId: number,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt: Date,
    public title: string,
  ) {}
}
