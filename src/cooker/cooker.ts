import { ICooker } from '../shared/interfaces/cooker.interface';
import { DishTypes } from '../shared/enums/dish-types';
import { IDish } from '../shared/interfaces/dish.interface';
import { Bread } from '../dish/bread';
import { Vegetables } from '../dish/vegetables';
import { Meat } from '../dish/meat';

export class Cooker implements ICooker {
  cook(type: DishTypes): IDish | undefined {
    let dish: IDish;
    switch (type) {
      case DishTypes.BREAD:
        dish = new Bread();
        break;
      case DishTypes.VEGETABLES:
        dish = new Vegetables();
        break;
      case DishTypes.MEAT:
        dish = new Meat();
        break;
      default:
    }
    return dish;
  }
}
