import { providerWrapper } from 'midway'
import { Table, Column, DataType } from 'sequelize-typescript';
import Base from '../base';

@Table({
  modelName: 'question',
  timestamps: false,
  freezeTableName: true,
})
export default class Question extends Base {
  @Column({
    type: DataType.TEXT,
    comment: 'content',
  })
  content: string;

  @Column({
    type: DataType.INTEGER({length:11}),
    comment: 'categoryId',
  })
  categoryId: number;

  @Column({
    type: DataType.INTEGER({length:11}),
    comment: 'typeId',
  })
  typeId: number;
}

export const factory = () => Question
providerWrapper([
    {
        id: 'question',
        provider: factory,
    },
])
export type IQuestion = typeof Question
