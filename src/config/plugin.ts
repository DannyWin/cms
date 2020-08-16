import { EggPlugin } from 'midway';
export default {
  static: true, // default is true
  sequelize: {
    enable: true,
    package: 'egg-sequelize-ts-upgrade',
  },
  jwt: {
    enable: true,
    package: "egg-jwt"
  },
  cors: {
    enable: true,
    package: 'egg-cors',
  },
} as EggPlugin;
