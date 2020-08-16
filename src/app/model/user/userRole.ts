import { providerWrapper } from 'midway'
import { Table, Column, DataType } from 'sequelize-typescript';
import Base from '../base';

@Table({
  modelName: 'userRole',
  timestamps: false,
  freezeTableName: true,
})
export default class UserRole extends Base {
  @Column({
    type: DataType.INTEGER({length:11}),
    comment: 'userId',
  })
  userId: number;

  @Column({
    type: DataType.INTEGER({length:11}),
    comment: 'roleId',
  })
  roleId: number;
}
export const factory = () => UserRole
providerWrapper([
    {
        id: 'userRole',
        provider: factory,
    },
])
export type IUserRole = typeof UserRole