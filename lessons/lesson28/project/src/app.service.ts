import { Injectable } from '@nestjs/common';
import { MongoClient } from 'mongodb';

@Injectable()
export class AppService {
  constructor(private mongoClient: MongoClient) {
    // console.log(this.mongoClient);
  }
  getHello(): string {
    return decorator(() => {
      return 'Hello World!';
    });
  }
}

function decorator(originalMethod) {
  console.time('start');

  const res = originalMethod();

  console.timeEnd('start');

  return res;
}
