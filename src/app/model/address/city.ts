import { providerWrapper } from 'midway'
import { Table, Column, DataType } from 'sequelize-typescript';
import Base from '../base';

@Table({
  modelName: 'city',
  timestamps: false,
  freezeTableName: true,
})
export default class City extends Base {
  @Column({
    type: DataType.STRING(50),
    comment: 'name',
  })
  name: string;

  @Column({
    type: DataType.INTEGER({length:11}),
    comment: 'provinceId',
  })
  provinceId: number;

  @Column({
    type: DataType.INTEGER({length:11}),
    comment: 'countryId',
  })
  countryId: number;

  @Column({
    type: DataType.DECIMAL(8, 5),
    comment: 'longitude',
  })
  longitude: number;

  @Column({
    type: DataType.DECIMAL(8, 5),
    comment: 'latitude',
  })
  latitude: number;
}

export const factory = () => City
providerWrapper([
    {
        id: 'city',
        provider: factory,
    },
])
export type ICity = typeof City
