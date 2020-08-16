import { providerWrapper } from 'midway'
import {Table,AutoIncrement, Column, DataType, Model, PrimaryKey } from 'sequelize-typescript';

@Table({
  modelName: 'base',
  timestamps: false,
  freezeTableName: true,
})
export default class Base extends Model<Base> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER({length:11}),
    comment: 'id',
  })
  id: number;

  @Column({
    type: DataType.INTEGER({length:11}),
    comment: 'order',
  })
  order: number;

  @Column({
    comment: 'enabled',
  })
  enabled: boolean;

  @Column({
    comment: 'deleted',
  })
  deleted: boolean;

  /**
     * 添加
     * @param item 新项目
     */
    static async createItem<T extends Base>(item:T){
        return await this.create(item);
    }

    /**
     * 删除
     * @param rid 
     */
    // static async deleteById<T extends Base>(rid:number){
    //     return await this.destroy({
    //         where:{rid:rid}
    //     });
    // }

    /**
     * 更新
     * @param item 新项目对象
     * @param rid 需要修改的项目rid
     */
    static async updateItemById<T extends Base>(item:T, rid:number){
        let objItem = await this.getById(rid) as T;
        for(let key in item)
            objItem[key] = item[key];
        
        return await objItem.save();
    }

    /**
     * 查询所有
     */
    static async getList<T extends Base>(){
        let items = await this.findAll({raw:true});
        return items as T[];
    }

    /**
     * 查询（通过rid）
     * @param rid 
     */
    static async getById<T extends Base>(id:number){
        let item = await this.findOne({
            raw:true,
            where:{id:id}
        });

        return item as T;
    }
}
//export default () => Base;

export const factory = () => Base
providerWrapper([
    {
        id: 'base',
        provider: factory,
    },
])
export type IBase = typeof Base