import { providerWrapper } from 'midway'
import { Table, Column, DataType } from 'sequelize-typescript';
import Base from '../base';

@Table({
  modelName: 'answerDateRange',
  timestamps: false,
  freezeTableName: true,
})
export default class AnswerDateRange extends Base {
  @Column({
    type: DataType.INTEGER({length:11}),
    comment: 'answerRecordId',
  })
  answerRecordId: number;

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

export const factory = () => AnswerDateRange
providerWrapper([
    {
        id: 'answerDateRange',
        provider: factory,
    },
])
export type IAnswerDateRange = typeof AnswerDateRange
