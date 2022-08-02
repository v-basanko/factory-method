import { Dish } from './dish';
import { DishTypes } from '../shared/enums/dish-types';

export class Meat extends Dish {
  constructor() {
    super(DishTypes.MEAT);
    this.shelfLifeHours = 6;
    this.name = 'meat';
  }
}
