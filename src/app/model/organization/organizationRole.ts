import { providerWrapper } from 'midway'
import { Table, Column, DataType } from 'sequelize-typescript';
import Base from '../base';

@Table({
  modelName: 'organizationRole',
  timestamps: false,
  freezeTableName: true,
})
export default class OrganizationRole extends Base {
  @Column({
    type: DataType.INTEGER({length:11}),
    comment: 'organizationId',
  })
  organizationId: number;

  @Column({
    type: DataType.INTEGER({length:11}),
    comment: 'roleId',
  })
  roleId: number;
}

export const factory = () => OrganizationRole
providerWrapper([
    {
        id: 'organizationRole',
        provider: factory,
    },
])
export type IOrganizationRole = typeof OrganizationRole
