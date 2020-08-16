import { providerWrapper } from 'midway'
import { Table, Column, DataType } from 'sequelize-typescript';
import Base from '../base';

@Table({
  modelName: 'surveyQuestion',
  timestamps: false,
  freezeTableName: true,
})
export default class SurveyQuestion extends Base {
  @Column({
    type: DataType.INTEGER({length:11}),
    comment: 'surveyId',
  })
  surveyId: number;

  @Column({
    type: DataType.INTEGER({length:11}),
    comment: 'questionId',
  })
  questionId: number;
}

export const factory = () => SurveyQuestion
providerWrapper([
    {
        id: 'surveyQuestion',
        provider: factory,
    },
])
export type ISurveyQuestion = typeof SurveyQuestion
