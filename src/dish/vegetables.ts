import { Dish } from './dish';
import { DishTypes } from '../shared/enums/dish-types';

export class Vegetables extends Dish {
  constructor() {
    super(DishTypes.VEGETABLES);
    this.shelfLifeHours = 12;
    this.name = 'vegetables';
  }
}
