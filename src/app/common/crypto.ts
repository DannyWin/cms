//const config=require('../../config/config.default');
import * as crypto from 'crypto'


const config={pwdSuffix:123}
const md5=(pass,option)=>{
    option=option || {algorithm:'md5',encoding:'hex'}
    return crypto.createHash(option.algorithm).update(`${[pass]}${config.pwdSuffix}`).digest(option.encoding);
}
export default {md5}