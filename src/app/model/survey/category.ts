import { providerWrapper } from 'midway'
import { Table, Column, DataType } from 'sequelize-typescript';
import Base from '../base';

@Table({
  modelName: 'category',
  timestamps: false,
  freezeTableName: true,
})
export default class Category extends Base {
  @Column({
    type: DataType.INTEGER({length:11}),
    comment: 'pid',
  })
  pid: number;

  @Column({
    type: DataType.STRING(30),
    comment: 'name',
  })
  name: string;
}

export const factory = () => Category
providerWrapper([
    {
        id: 'category',
        provider: factory,
    },
])
export type ICategory = typeof Category
