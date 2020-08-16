import { providerWrapper } from 'midway'
import { Table, Column, DataType } from 'sequelize-typescript';
import Base from '../base';

@Table({
  modelName: 'user',
  timestamps: false,
  freezeTableName: true,
})
export default class User extends Base {
  @Column({
    type: DataType.STRING(30),
    comment: 'uid',
  })
  uid: string;

  @Column({
    type: DataType.STRING(30),
    comment: 'password',
  })
  pwd: string;

  @Column({
    type: DataType.INTEGER({length:11}),
    comment: 'organizationId',
  })
  organizationId: number;

  @Column({
    type: DataType.STRING(30),
    comment: 'name',
  })
  name: string;

  @Column({
    type: DataType.INTEGER({length:3}),
    comment: 'age',
  })
  age: number;

  @Column({
    type: DataType.DATE,
    comment: 'regDate',
  })
  regDate: Date;
}

export const factory = () => User
providerWrapper([
    {
        id: 'user',
        provider: factory,
    },
])
export type IUser = typeof User