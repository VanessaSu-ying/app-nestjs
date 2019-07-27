import { Controller, Get, Param, Res, Post, Body, HttpStatus, NotFoundException} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto} from './dto/create-user.dto'
import { User } from './interfaces/user.interface';


@Controller('users')
export class UsersController {

    constructor( private UsersService: UsersService ){}

    @Get('/all')
    async getUsers(@Res() res): Promise<User[]>{
       const users = await this.UsersService.getAllUsers();
       return res.status(HttpStatus.OK).json({
            users
       })
    }

    @Post('/create')
    async createUser(@Res() res, @Body() createUserDto: CreateUserDto): Promise<User>{
       const user = await this.UsersService.createUser(createUserDto);
       return res.status(HttpStatus.OK).json({
           mensaje: 'Usuario Guardado',
           user
       })
    }

    @Get('/:userId')
    async getUser(@Res() res, @Param('userId') userId: string){
         const user = await this.UsersService.getUser(userId);
         if (!user) throw new NotFoundException('Usuario no existe');
         return res.status(HttpStatus.OK).json(user); 
    }

}
