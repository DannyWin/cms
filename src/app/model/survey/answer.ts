import { providerWrapper } from 'midway'
import { Table, Column, DataType } from 'sequelize-typescript';
import Base from '../base';

@Table({
  modelName: 'answer',
  timestamps: false,
  freezeTableName: true,
})
export default class Answer extends Base {
  @Column({
    type: DataType.TEXT,
    comment: 'content',
  })
  content: string;

  @Column({
    type: DataType.INTEGER({length:11}),
    comment: 'questionId',
  })
  questionId: number;
}

export const factory = () => Answer
providerWrapper([
    {
        id: 'answer',
        provider: factory,
    },
])
export type IAnswer = typeof Answer
