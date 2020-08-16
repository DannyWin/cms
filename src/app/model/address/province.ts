import { providerWrapper } from 'midway'
import { Table, Column, DataType } from 'sequelize-typescript';
import Base from '../base';

@Table({
  modelName: 'province',
  timestamps: false,
  freezeTableName: true,
})
export default class Province extends Base {
  @Column({
    type: DataType.STRING(50),
    comment: 'name',
  })
  name: string;

  @Column({
    type: DataType.INTEGER({length:11}),
    comment: 'countryId',
  })
  countryId: number;
}

export const factory = () => Province
providerWrapper([
    {
        id: 'province',
        provider: factory,
    },
])
export type IProvince = typeof Province
