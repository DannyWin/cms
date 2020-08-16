import { providerWrapper } from 'midway'
import { Table, Column, DataType } from 'sequelize-typescript';
import Base from '../base';

@Table({
  modelName: 'messageRole',
  timestamps: false,
  freezeTableName: true,
})
export default class MessageRole extends Base {
  @Column({
    type: DataType.INTEGER({length:11}),
    comment: 'messageId',
  })
  messageId: number;

  @Column({
    type: DataType.INTEGER({length:11}),
    comment: 'roleId',
  })
  roleId: number;

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

export const factory = () => MessageRole
providerWrapper([
    {
        id: 'messageRole',
        provider: factory,
    },
])
export type IMessageRole = typeof MessageRole
