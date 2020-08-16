import { EggAppConfig, EggAppInfo, PowerPartial } from 'midway';

export type DefaultConfig = PowerPartial<EggAppConfig>

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1596551222803_444';

  // add your config here
  config.middleware = [
  ];

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'cms',
    //delegate: 'model',
    //baseDir: 'model',
    //repositoryMode: true,
  }
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    //domainWhiteList: ['http://localhost:8080'],//许访问⼝的⽩单
  };
  config.jwt = {  //jwt配置项
    secret: "123456",
    expiresIn: '7d',
  }
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };
  return config;
};
