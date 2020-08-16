import { providerWrapper } from 'midway'
import { Table, Column, DataType } from 'sequelize-typescript';
import Base from '../base';

@Table({
  modelName: 'answerRecord',
  timestamps: false,
  freezeTableName: true,
})
export default class AnswerRecord extends Base {
  @Column({
    type: DataType.INTEGER({length:11}),
    comment: 'userId',
  })
  userId: number;

  @Column({
    type: DataType.INTEGER({length:11}),
    comment: 'questionId',
  })
  questionId: number;

  @Column({
    type: DataType.INTEGER({length:11}),
    comment: 'answerId',
  })
  answerId: number;

  @Column({
    type: DataType.TEXT,
    comment: 'content',
  })
  content: string;

  @Column({
    type: DataType.INTEGER({length:11}),
    comment: 'answerDateRangeId',
  })
  answerDateRangeId: number;

  @Column({
    type: DataType.DATE,
    comment: 'answerDate',
  })
  answerDate: Date;
}

export const factory = () => AnswerRecord
providerWrapper([
    {
        id: 'answerRecord',
        provider: factory,
    },
])
export type IAnswerRecord = typeof AnswerRecord
