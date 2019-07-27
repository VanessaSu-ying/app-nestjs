import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose'
import {User} from './interfaces/user';
import {Model} from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {


    constructor(@InjectModel('user') private userModel: Model<User> ){}


    async getAllUsers() {
        return await this.userModel.find();
    }
    
    async getUser(id: string){
       return await this.userModel.findById(id);
    }

    async createUser(user: CreateUserDto ){
       const newUser = new this.userModel(user);
        return await newUser.save();
    }








    /*users: User[] = [
        {
          id: 1,
          username: "vane",
          password: "123", 
        }
    ];

    getAllUsers(){
        return[
            {
                id: 1,
                name: 'user 1',
                password:'123',
            },
            {
                id: 2,
                name: 'user 2',
                password:'456',
            }
        ];
    }

    getUser(id:string){
        return{
            id,
            name: `user ${id}`,
        };
    }*/

}
