import { providerWrapper } from 'midway'
import { Table, Column, DataType } from 'sequelize-typescript';
import Base from '../base';

@Table({
  modelName: 'sort',
  timestamps: false,
  freezeTableName: true,
})
export default class Sort extends Base {
  @Column({
    type: DataType.STRING(30),
    comment: 'name',
  })
  name: string;
}

export const factory = () => Sort
providerWrapper([
    {
        id: 'sort',
        provider: factory,
    },
])
export type ISort = typeof Sort
