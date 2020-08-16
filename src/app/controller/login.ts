import { Context, controller, post, inject, provide } from 'midway';
import { IUserService } from '../iservice/iuser';
@provide()
@controller('/login')
export class LoginController {

  @inject()
  ctx: Context;

  @inject('userService')
  userService: IUserService;

  @post('/')
  async login(ctx: Context): Promise<void> {
    const { uid, pwd } = ctx.request.body;
    const token = await this.userService.login({ uid, pwd });
    if(token){

      ctx.body = {msg: 'Login successfully', data: {token} };
    }else{
      ctx.status=400;
      ctx.body={code:'auth:userNotFound', msg: 'Uid or Pwd is wrong'}
      //ctx.throw(400,'Uid or Pwd is wrong')
    }
    
  }
}
