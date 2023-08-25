import { Column, Model, ModelCtor, Table } from "sequelize-typescript";


@Table
export class User extends Model {
  @Column
  username: string;

  @Column
  email: string;

  @Column
  password: string;
}

export type UserModel = ModelCtor<User>;