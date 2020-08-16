import { providerWrapper } from 'midway'
import { Table, Column, DataType } from 'sequelize-typescript';
import Base from '../base';

@Table({
  modelName: 'questionOption',
  timestamps: false,
  freezeTableName: true,
})
export default class QuestionOption extends Base {
  @Column({
    type: DataType.INTEGER({length:11}),
    comment: 'questionId',
  })
  questionId: number;

  @Column({
    type: DataType.INTEGER({length:11}),
    comment: 'optionnId',
  })
  optionId: number;
}

export const factory = () => QuestionOption
providerWrapper([
    {
        id: 'questionOption',
        provider: factory,
    },
])
export type IQuestionOption = typeof QuestionOption
