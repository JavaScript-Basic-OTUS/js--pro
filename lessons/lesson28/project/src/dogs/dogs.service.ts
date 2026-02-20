import { Injectable } from '@nestjs/common';
import { MongoClient } from 'mongodb';

import { Dog } from './dogs.interface';

//Класс должен иметь декоратор Injectable
// Мы должны его встроить в модуль.

@Injectable()
export class DogsService {
  private dogs: Dog[];

  constructor(private mongoClient: MongoClient) {
    this.dogs = [
      { id: 1, name: 'barbos' },
      { id: 2, name: 'sharik' },
    ];
  }

  list(): Dog[] {
    return this.dogs;
  }

  instance(id: number): Dog {
    console.log(id);

    return this.dogs.find((dog) => dog.id === id);
  }

  add(dog: Dog) {
    this.dogs.push(dog);
  }
}
