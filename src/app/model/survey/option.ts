import { providerWrapper } from 'midway'
import { Table, Column, DataType } from 'sequelize-typescript';
import Base from '../base';

@Table({
  modelName: 'option',
  timestamps: false,
  freezeTableName: true,
})
export default class Option extends Base {
  @Column({
    type: DataType.TEXT,
    comment: 'content',
  })
  content: string;
}

export const factory = () => Option
providerWrapper([
    {
        id: 'option',
        provider: factory,
    },
])
export type IOption = typeof Option
