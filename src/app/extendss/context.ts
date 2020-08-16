
//import { Sequelize} from 'sequelize-typescript';
//import User from '../model//user';
// import BaseTable from './tables/base_table';
// import derived_table from './tables/derived_table';

// // All entities
// import  from './models/access_record';

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

// sequelize.authenticate().then(() => {
//     console.log('Connection has been established successfully.')
// })
// .catch(err => {
//     console.error('Unable to connect to the database:', err)
// });

// //export { sequelize }


// const ENTITY = Symbol('Application#entity');

// module.exports = {
//   get entity() {
//     // this 就是 app 对象，在其中可以调用 app 上的其他方法，或访问属性
//     if (!this[ENTITY]) {
//       // 实际情况肯定更复杂
//       this[ENTITY] = sequelize;
//     }
//     return this[ENTITY];
//   },
// };