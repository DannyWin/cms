import { provide, inject, config, plugin } from 'midway';
import { ILoginOptions, IUserService } from '../iservice/iuser';
import User,{ IUser } from '../model/user/user'
@provide('userService')
export class UserService implements IUserService {

  @inject()
  private user: IUser;

  @plugin('jwt')
  private jwt;

  @config('jwt')
  private jwtConfig;

  // async getUser(options: IUserOptions): Promise<IUserResult> {

  //   return {
  //     id: options.id,
  //     username: 'mockedName',
  //     phone: '12345678901',
  //     email: 'xxx.xxx@xxx.com',
  //   };
  // }

  /**
  * 获取用户信息
  *
  * @param {string} id string
  * @returns {User} user
  * @memberof UserService
  */
  async getUserById(id: number) {
    return await this.user.getById<User>(id)
    // return await this.user.findOne({ where: { id } })
  }

  // /**
  //  * 用户注册
  //  *
  //  * @param {IRegisterOptions} options
  //  * @returns
  //  * @memberof UserService
  //  */
  // async register(options: IRegisterOptions) {
  //     // 添加uuid
  //     options.userId = uuidv1().replace(/-/g, '')

  //     // 是否可以查询到
  //     const queryResult = await this.hasRegister(options.email)

  //     if (queryResult) {
  //         return { status: 200, message: '邮箱已被使用', data: { flag: false } }
  //     }

  //     const userInfo = await this.UserModel.create(options)

  //     // 注册成功，返回userid给前端
  //     return { status: 200, message: '注册成功', data: { userId: userInfo.dataValues.userId, flag: true } }
  // }

  /**
   * 登录
   *
   * @param {ILoginOptions} options
   * @returns
   * @memberof UserService
   */
  async login(options: ILoginOptions) {
    const existUser = await this.getUserByUid(options.uid)

    // 用户不存在
    if (!existUser) {
      return null
    }

    let token = ''
    if (existUser.pwd === options.pwd) {
      token = this.jwt.sign({ userId: existUser.uid }, this.jwtConfig.secret , { expiresIn: this.jwtConfig.expiresIn })
    }
    // 验证通过
    return token
  }

  // /**
  //  * 更新用户信息
  //  *
  //  * @param {IupdateUserInfoOptions} options
  //  * @returns
  //  * @memberof UserService
  //  */
  // async updateUserInfo(options: IupdateUserInfoOptions) {
  //     return this.UserModel.update(options, { where: { userId: options.userId } })
  // }

  // /**
  //  * 通过邮箱获取用户
  //  *
  //  * @param {string} email
  //  * @returns
  //  * @memberof UserService
  //  */
  // async getUserByMail(email: string) {
  //   return this.UserModel.findOne({ where: { email } })
  // }

  /**
 * 通过邮箱获取用户
 *
 * @param {string} uid
 * @returns
 * @memberof UserService
 */
  async getUserByUid(uid: string): Promise<User> {
    return await this.user.findOne({ where: { uid } })
  }


  // /**
  //  * 邮箱校验账号是否存在
  //  *
  //  * @private
  //  * @param {string} email
  //  * @returns
  //  * @memberof UserService
  //  */
  // private async hasRegister(email: string) {
  //     // 查询用户名
  //     const userInfo = await this.getUserByMail(email)

  //     if (userInfo && userInfo.dataValues.userId) {
  //         return true
  //     }
  //     return false
  // }

}
