import { providerWrapper } from 'midway'
import { Table, Column, DataType } from 'sequelize-typescript';
import Base from '../base';

@Table({
  modelName: 'organizationAddress',
  timestamps: false,
  freezeTableName: true,
})
export default class OrganizationAddress extends Base {
  @Column({
    type: DataType.INTEGER({length:11}),
    comment: 'organizationId',
  })
  organizationId: number;

  @Column({
    type: DataType.INTEGER({length:11}),
    comment: 'roleId',
  })
  addressId: number;
}

export const factory = () => OrganizationAddress
providerWrapper([
    {
        id: 'organizationAddress',
        provider: factory,
    },
])
export type IOrganizationAddress = typeof OrganizationAddress
