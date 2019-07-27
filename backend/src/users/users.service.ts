import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose'
import {User} from './interfaces/user.interface';
import {Model} from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {


    constructor(@InjectModel('user') private userModel: Model<User> ){}


    async getAllUsers(): Promise<User[]> {
        const users = await this.userModel.find();
        return users;
    }
    
    async getUser(userId: string): Promise<User>{
         const user = await this.userModel.findById(userId);
         return user;
    }

    async createUser(createUserDto: CreateUserDto ): Promise<User>{
       const newUser = new this.userModel(createUserDto);
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
