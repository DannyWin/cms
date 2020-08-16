import { Context, controller, get, inject, provide} from 'midway';
import { IUserService } from '../iservice/iuser';
import User from '../model/user/user';
@provide()
@controller('/user')
export class UserController {

  @inject()
  ctx: Context;

  @inject('userService')
  service: IUserService;

  @get('/:id')
  async getUser(): Promise<void> {
    const id: number = this.ctx.params.id;
    const user: User = await this.service.getUserById(id);
    this.ctx.body = { msg: 'success', data: {user}};
  }
}
