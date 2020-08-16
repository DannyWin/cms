// import { Sequelize} from 'sequelize-typescript';
// //import User from '../model//user';
// // import BaseTable from './tables/base_table';
// // import derived_table from './tables/derived_table';

// // // All entities
// // import  from './models/access_record';

// const sequelize = new Sequelize({
//     database:"cms",
//     username:"root",
//     password:"root",
//     host:"localhost",
//     port:3306,
//     dialect:'mysql',
//     operatorsAliases:false,

//     pool:{
//         max:5,
//         min:0,
//         acquire:30000,
//         idle:10000
//     },

//     // 时区设置
//     dialectOptions:{
//         useUTC:true // for reading from database
//     },
//     //timezone:'+8:00' // for writing to database
// })
// sequelize.addModels([__dirname + '/model']);
// // sequelize.authenticate().then(() => {
// //     console.log('Connection has been established successfully.')
// // })
// // .catch(err => {
// //     console.error('Unable to connect to the database:', err)
// // });



import { DB } from './model/db'

// build db connections when starting APP
module.exports = app => {
    app.beforeStart(async () => {
        console.log('====================================')
        console.log('🚀  Your awesome APP is launching...')
        console.log('====================================')

        await DB.initDB(app.config.sequelize)

        console.log('====================================')
        console.log('✅  Your awesome APP launched')
        console.log('====================================')
    })
}