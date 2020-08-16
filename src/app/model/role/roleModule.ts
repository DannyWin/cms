import { providerWrapper } from 'midway'
import { Table, Column, DataType } from 'sequelize-typescript';
import Base from '../base';

@Table({
  modelName: 'roleModule',
  timestamps: false,
  freezeTableName: true,
})
export default class RoleModule extends Base {
  @Column({
    type: DataType.INTEGER({length:11}),
    comment: 'roleId',
  })
  roleId: number;

  @Column({
    type: DataType.INTEGER({length:11}),
    comment: 'moduleId',
  })
  moduleId: number;
}

export const factory = () => RoleModule
providerWrapper([
    {
        id: 'roleModule',
        provider: factory,
    },
])
export type IRoleModule = typeof RoleModule
