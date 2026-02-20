import {
  Controller,
  Get,
  Post,
  Param,
  HttpCode,
  HttpStatus,
  Body,
  HttpException,
  UseGuards,
  Request
} from '@nestjs/common';

import { ValidationPipe } from '../app.pipe';
import { CatDto } from './cats.dto';
import { AuthGuard, Role, User } from '../auth.guard';
// import { } from '../'

@UseGuards(new AuthGuard([Role.user]))
@Controller('cats')
export class CatsController {
  private cats: CatDto[];

  constructor() {
    this.cats = [
      { id: 1, name: 'barsik' },
      { id: 2, name: 'matroskin' },
    ];
  }

  @Get('/list')
  list(): CatDto[] {
    // // Или HttpException
    // throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
    // // Или свой Custom error
    throw new Error('my-exception');

    return this.cats;
  }

  @Get('/:id')
  // @ApiEndpointDecorator(dto.endpoints.reports)
  instance(@Param('id', ValidationPipe) id, @User() user: any, @Request() req): CatDto {
    console.log(id);
    console.log(user);
    console.log(req.user);

    return this.cats.find((cat) => cat.id === parseInt(id));
  }

  @Post('/:id')
  @HttpCode(HttpStatus.CREATED)
  add(@Body() cat: CatDto): void {
    this.cats.push(cat);
  }
}

// import {
//   applyDecorators,
//   Delete,
//   Get,
//   HttpCode,
//   HttpStatus,
//   Patch,
//   Post,
//   Put,
//   UsePipes
// } from '@nestjs/common';
// import {
//   ApiBody,
//   ApiBodyOptions,
//   ApiOperation,
//   ApiQuery,
//   ApiQueryOptions,
//   ApiResponse
// } from '@nestjs/swagger';

// import { RequestValidationPipe } from '../json-schema-validation';
// import { dtoResponse } from './response';
// import { IDTOEndpoint } from './types';

// export const methodDecorators = {
//   DELETE: Delete,
//   GET: Get,
//   PATCH: Patch,
//   POST: Post,
//   PUT: Put
// };

// export function ApiEndpointDecorator(dto: IDTOEndpoint, extraDecorators: MethodDecorator[] = []): MethodDecorator {
//   const decorators = [];
//   const httpMethod = methodDecorators[dto.method as keyof typeof methodDecorators];
//   const httpStatus = dto.httpStatus ?? HttpStatus.OK;
//   decorators.push(httpMethod(dto.path));
//   decorators.push(HttpCode(httpStatus));

//   if (dto.body) {
//     decorators.push(ApiBody(dto.body as ApiBodyOptions));
//   }

//   if (dto.query) {
//     decorators.push(ApiQuery(dto.query as ApiQueryOptions));
//   }

//   if (dto.body) {
//     decorators.push(UsePipes(new RequestValidationPipe(dto)));
//   }

//   for (const status in dto.response) {
//     decorators.push(ApiResponse(dto.response[status]));
//   }

//   if (HttpStatus.INTERNAL_SERVER_ERROR in dto.response === false) {
//     decorators.push(ApiResponse(dtoResponse[HttpStatus.INTERNAL_SERVER_ERROR]));
//   }

//   if (dto.summary) {
//     decorators.push(ApiOperation({ summary: dto.summary }));
//   }

//   if (dto.deprecated) {
//     decorators.push(ApiOperation({ deprecated: dto.deprecated }));
//   }

//   return applyDecorators(...decorators, ...extraDecorators);
// }


// god decorator
// В который я просто прокидывываю опции, какие декораторы включить
