import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidationPipe implements PipeTransform<string, number> {
  transform(value: string, metadata: ArgumentMetadata): number {
    console.log('value', value, +value);
    console.log('metadata', metadata);

    // transform - преобразовываем данные
    // validation - валидацию, если неверно, но throw ValidationError
    return +value;
  }
}
