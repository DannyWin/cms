import { providerWrapper } from 'midway'
import { Table, Column, DataType } from 'sequelize-typescript';
import Base from '../base';

@Table({
  modelName: 'role',
  timestamps: false,
  freezeTableName: true,
})
export default class Role extends Base {
  @Column({
    type: DataType.STRING(30),
    comment: 'name',
  })
  name: string;

  @Column({
    type: DataType.TEXT,
    comment: 'description',
  })
  description: string;
}

export const factory = () => Role
providerWrapper([
    {
        id: 'role',
        provider: factory,
    },
])
export type IRole = typeof Role
