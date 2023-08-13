import { UpdateUserDto } from './../../dtos/UpdateUser.dto';
import { Controller, Get, Post, Body, Put, Param, ParseIntPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService){

    }
    @Get()
    getUsers() {
       return this.userService.findUsers();
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        this.userService.createUser(createUserDto);
    }
    
    @Put(':id')
    async updateUserById(
       @Param('id', ParseIntPipe) id: number,
       @Body() updateUserDto: UpdateUserDto,
       ) {
       await this.userService.updateUser(id, updateUserDto);
    }
}
