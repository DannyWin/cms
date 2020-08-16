import { providerWrapper } from 'midway'
import { Table, Column, DataType } from 'sequelize-typescript';
import Base from '../base';

@Table({
  modelName: 'country',
  timestamps: false,
  freezeTableName: true,
})
export default class Country extends Base {
  @Column({
    type: DataType.STRING(50),
    comment: 'name',
  })
  name: string;

  @Column({
    type: DataType.STRING(10),
    comment: 'code',
  })
  code: string;

  @Column({
    type: DataType.STRING(10),
    comment: 'timeZone',
  })
  timeZone: string;

  @Column({
    type: DataType.STRING(30),
    comment: 'continent',
  })
  continent: string;
}

export const factory = () => Country
providerWrapper([
    {
        id: 'country',
        provider: factory,
    },
])
export type ICountry = typeof Country
