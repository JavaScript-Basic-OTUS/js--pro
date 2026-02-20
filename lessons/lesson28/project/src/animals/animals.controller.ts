import {
  Controller,
  Get,
  Post,
  Param,
  HttpCode,
  HttpStatus,
  HttpException,
  Body,
  ParseIntPipe,
  UseGuards,
  Req
} from '@nestjs/common';

import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { Request } from 'express';

import { AnimalDto } from './animals.dto';
import { AnimalsService } from './animals.service';
import { ValidationPipe } from '../app.pipe';
import { AuthGuard, Role, User } from '../auth.guard';

// interface CustomRequest extends Request {
//   user: any;
// }
// export const User = createParamDecorator(
//   (data: unknown, ctx: ExecutionContext): string => {
//     const request = ctx.switchToHttp().getRequest();
//     return request.user;
//   }
// );

// // Загадка
// // 1 сервис в два контроллера
// // Как синглтон или не как синглтон?

export class NotFoundException extends HttpException {
  constructor(namespace: string, id: number) {
    super({
      message: `Instance in ${namespace} with id ${id} not found`,
      status: HttpStatus.NOT_FOUND,
      namespace,
      id
    }, HttpStatus.NOT_FOUND);
  }
}

@Controller('animals')
export class AnimalsController {
  constructor(private animalsService: AnimalsService) {}

  @Get('/list')
  list(): Promise<AnimalDto[]> {
    return this.animalsService.list();
  }

  @Get('/instance/:id')
  async instance(@Param('id', ValidationPipe) id: number): Promise<AnimalDto> {
    console.log('typeof id', typeof id);

    const animal = await this.animalsService.instance(id);

    // console.log(animal);

    if (!animal) {
      throw new NotFoundException('animals', id);
    }

    return animal;
  }

  @Post('/create')
  @HttpCode(HttpStatus.CREATED)
  // валдиация, swagger и т.д.
  add(@Body() animal: AnimalDto): Promise<AnimalDto> {
    return this.animalsService.add(animal);
  }


  @Get('/secret-route')
  @UseGuards(new AuthGuard([Role.admin]))
  secretRoute(@User() user: any) {
    console.log(user);

    return 'secret';
  }
}

// @Controller('animals')
// export class AnimalsController {
//   constructor(private animalsService: AnimalsService) {}

//   @Get('/list')
//   list(): Promise<AnimalDto[]> {
//     return this.animalsService.list();
//   }

//   @Get('/instance/:id')
//   async instance(@Param('id', ValidationPipe) id: number): Promise<AnimalDto> {
//     console.log(typeof id);

//     const animal = await this.animalsService.instance(id);

//     // console.log(animal);

//     if (!animal) {
//       throw new NotFoundException('animals', id);
//     }

//     return animal;
//   }

//   @Post('/create')
//   @HttpCode(HttpStatus.CREATED)
//   add(@Body() animal: AnimalDto): Promise<AnimalDto> {
//     return this.animalsService.add(animal);
//   }

// }
