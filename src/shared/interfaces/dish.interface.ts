import { DishTypes } from '../enums/dish-types';

export interface IDish {
  name: string;
  type: DishTypes;
  cookedAt: Date;
  shelfLifeHours: number;
  getBestBefore: () => Date;
  toString: () => string;
}
