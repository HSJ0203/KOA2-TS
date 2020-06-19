import { ParameterizedContext } from 'koa';
import { getManager } from 'typeorm';
import { User } from '../entity/user';

export default class AuthController{
    public static async register(ctx:ParameterizedContext){
   
        const req = ctx.request.body;
        const userRepository = getManager().getRepository(User);
        const newUser = userRepository.create(req);
        await userRepository.save(newUser);

        ctx.body = newUser;  
    }
}