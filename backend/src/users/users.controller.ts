import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto} from './dto/create-user.dto'
import { User } from './interfaces/user';

@Controller('users')
export class UsersController {

    constructor( private UsersService: UsersService ){}

    /*@Get('/all')
    getUsers(): Promise<User>{
       return this.UsersService.getAllUsers();
    }*/

    @Get(':UserId')
    getUser(@Param('UserId') userId: string){
        return this.UsersService.getUser(userId);
    }

    @Post()
    createUser(@Body() user: CreateUserDto): Promise<User>{
       return this.UsersService.createUser(user);
    }

}
