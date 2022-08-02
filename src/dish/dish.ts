import { IDish } from '../shared/interfaces/dish.interface';
import { DishTypes } from '../shared/enums/dish-types';

export class Dish implements IDish {
  name: string;
  type: DishTypes;
  cookedAt: Date;
  shelfLifeHours: number;

  getBestBefore(): Date {
    return new Date(
      Date.parse(this.cookedAt.toISOString()) +
        this.shelfLifeHours * 1000 * 60 * 60,
    );
  }

  constructor(type: DishTypes) {
    this.name = '';
    this.type = type;
    this.cookedAt = new Date();
    this.shelfLifeHours = 0;
  }

  toString() {
    return `${
      this.name
    },\nCooked at ${this.cookedAt.toISOString()},\nBest before ${this.getBestBefore().toISOString()}\n\n`;
  }
}
