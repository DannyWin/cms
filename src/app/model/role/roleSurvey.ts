import { providerWrapper } from 'midway'
import { Table, Column, DataType } from 'sequelize-typescript';
import Base from '../base';

@Table({
  modelName: 'roleSurvey',
  timestamps: false,
  freezeTableName: true,
})
export default class RoleSurvey extends Base {
  @Column({
    type: DataType.INTEGER({length:11}),
    comment: 'roleId',
  })
  roleId: number;

  @Column({
    type: DataType.INTEGER({length:11}),
    comment: 'surveyId',
  })
  surveyId: number;
}

export const factory = () => RoleSurvey
providerWrapper([
    {
        id: 'roleSurvey',
        provider: factory,
    },
])
export type IRoleSurvey = typeof RoleSurvey
