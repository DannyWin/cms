import { providerWrapper } from 'midway'
import { Table, Column, DataType } from 'sequelize-typescript';
import Base from '../base';

@Table({
  modelName: 'address',
  timestamps: false,
  freezeTableName: true,
})
export default class Address extends Base {
  @Column({
    type: DataType.TEXT,
    comment: 'address',
  })
  address: string;
}

export const factory = () => Address
providerWrapper([
    {
        id: 'address',
        provider: factory,
    },
])
export type IAddress = typeof Address
