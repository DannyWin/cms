import { providerWrapper } from 'midway'
import { Table, Column, DataType } from 'sequelize-typescript';
import Base from '../base';

@Table({
  modelName: 'survey',
  timestamps: false,
  freezeTableName: true,
})
export default class Survey extends Base {
  @Column({
    type: DataType.STRING(30),
    comment: 'surveyName',
  })
  name: string;

  @Column({
    type: DataType.TEXT,
    comment: 'description',
  })
  description: string;

  @Column({
    type: DataType.INTEGER({length:11}),
    comment: 'expectedCount',
  })
  expectedCount: number;

  @Column({
    type: DataType.DATE,
    comment: 'startDate',
  })
  startDate: Date;

  @Column({
    type: DataType.DATE,
    comment: 'endDate',
  })
  endDate: Date;
}

export const factory = () => Survey
providerWrapper([
    {
        id: 'survey',
        provider: factory,
    },
])
export type ISurvey = typeof Survey
