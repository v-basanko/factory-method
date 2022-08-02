import { IDish } from './dish.interface';
import { DishTypes } from '../enums/dish-types';

export interface ICooker {
  cook: (type: DishTypes) => IDish;
}
