import User from '../model/user/user'

export interface IRegisterOptions {
    username: string
    password: string
    mobile?: number
    email: string
    userId?: string
}

export interface ILoginOptions {
    uid: string
    pwd: string
}


/**
 * @description User-Service parameters
 */
export interface IUserOptions {
id: number;
}

/**
 * @description User-Service response
 */
export interface IUserResult {
id: number;
username: string;
phone: string;
email?: string;
}

/**
 * @description User-Service abstractions
 */
export interface IUserService {
    login(loginOptions:ILoginOptions):Promise<string>;
    //getUser(options: IUserOptions): Promise<IUserResult>;
    getUserById(id: number): Promise<User>;
    
  }