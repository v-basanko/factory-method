import { Dish } from './dish';
import { DishTypes } from '../shared/enums/dish-types';

export class Bread extends Dish {
  constructor() {
    super(DishTypes.BREAD);
    this.shelfLifeHours = 24;
    this.name = 'bread';
  }
}
