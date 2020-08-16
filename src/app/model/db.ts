import { provide, scope, ScopeEnum } from 'midway'
import { Sequelize,SequelizeOptions } from 'sequelize-typescript'
// import { DiscussModel } from './discuss'
// import { FollowModel } from './follow'
// import { TopicModel } from './topic'
// import { TopicLikeModel } from './topic-like'
// import {User}  from './user/user'

interface ISequelizeConfig {
    host: string
    port: number
    user: string
    password: string
    database: string
    dialect: string
}

// providing DB.sequelize in case of hyper features
// of sequelize like "sequelize.transaction"
@scope(ScopeEnum.Singleton)
@provide('DB')
export class DB {
    static sequelize: Sequelize

    static async initDB(config: ISequelizeConfig) {
        DB.sequelize = new Sequelize({
            database: config.database,
            username: config.user,
            password: config.password,
            dialect: config.dialect,
            repositoryMode: true,
            // host: config.host,
            // port: config.port,
            // logging: false,
            // operatorsAliases: false,

            // pool:{
            //     max:5,
            //     min:0,
            //     acquire:30000,
            //     idle:10000
            // },

            // // 时区设置
            // dialectOptions:{
            //     useUTC:true // for reading from database
            // },
            // timezone:'+0:00' // for writing to database
        } as SequelizeOptions)

        // add models here before using them
        DB.sequelize.addModels([__dirname + '/model'])
        
        try {
            await DB.sequelize.authenticate()
        } catch (error) {
            error.message = `DB connection error: ${error.message}`
            throw error
        }
    }
}