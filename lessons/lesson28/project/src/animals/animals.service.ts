import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { AnimalDto } from './animals.dto';
import { AnimalDocument, AnimalModel } from './animals.schema';

@Injectable()
export class AnimalsService {
  private animals: AnimalModel[] = [
    {
      id: 1, type: 'dogs', name: 'sharik'
    }
  ]

  constructor(
    @InjectModel(AnimalModel.name) private animalModel: Model<AnimalDocument>,
  ) { }

  async init() {
    // вызывать где-то
  }

  list(): Promise<AnimalModel[]> {
    return this.animalModel.find({}).exec();
  }

  instance(id: number): Promise<AnimalModel> {
    return this.animalModel.findOne({ id }).exec();
  }

  add(animal: AnimalDto): Promise<AnimalModel> {
    const createdAnimal = new this.animalModel(animal);

    return createdAnimal.save();
  }
}
