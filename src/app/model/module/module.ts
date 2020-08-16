import { providerWrapper } from 'midway'
import { Table, Column, DataType } from 'sequelize-typescript';
import Base from '../base';

@Table({
  modelName: 'module',
  timestamps: false,
  freezeTableName: true,
})
export default class Module extends Base {
  @Column({
    type: DataType.INTEGER({length:11}),
    comment: 'pid',
  })
  pid: number;

  @Column({
    type: DataType.STRING(100),
    comment: 'name',
  })
  name: string;

  @Column({
    type: DataType.TEXT,
    comment: 'description',
  })
  description: string;

  @Column({
    type: DataType.TEXT,
    comment: 'url',
  })
  url: string;

  @Column({
    type: DataType.TEXT,
    comment: 'api',
  })
  api: string;
}

export const factory = () => Module
providerWrapper([
    {
        id: 'module',
        provider: factory,
    },
])
export type IModule = typeof Module
