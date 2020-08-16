import { providerWrapper } from 'midway'
import { Table, Column, DataType } from 'sequelize-typescript';
import Base from '../base';

@Table({
  modelName: 'organization',
  timestamps: false,
  freezeTableName: true,
})
export default class Organization extends Base {
  @Column({
    type: DataType.INTEGER({length:11}),
    comment: 'pid',
  })
  pid: number;

  @Column({
    type: DataType.STRING(100),
    comment: 'name',
  })
  name: string;

  @Column({
    type: DataType.TEXT,
    comment: 'description',
  })
  description: string;

  @Column({
    type: DataType.STRING(20),
    comment: 'phone',
  })
  phone: string;

  @Column({
    type: DataType.INTEGER({length:11}),
    comment: 'employeeCount',
  })
  employeeCount: number;
}

export const factory = () => Organization
providerWrapper([
    {
        id: 'organization',
        provider: factory,
    },
])
export type IOrganization = typeof Organization
