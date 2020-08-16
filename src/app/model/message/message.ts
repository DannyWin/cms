import { providerWrapper } from 'midway'
import { Table, Column, DataType } from 'sequelize-typescript';
import Base from '../base';

@Table({
  modelName: 'message',
  timestamps: false,
  freezeTableName: true,
})
export default class Message extends Base {
  @Column({
    type: DataType.STRING(100),
    comment: 'title',
  })
  title: string;

  @Column({
    type: DataType.TEXT,
    comment: 'content',
  })
  content: string;

  @Column({
    type: DataType.DATE,
    comment: 'addDate',
  })
  addDate: Date;
}

export const factory = () => Message
providerWrapper([
    {
        id: 'message',
        provider: factory,
    },
])
export type IMessage = typeof Message
