import { Cooker } from './cooker/cooker';
import { DishTypes } from './shared/enums/dish-types';

const run = () => {
  const cooker = new Cooker();
  const dish = cooker.cook(DishTypes.VEGETABLES);
  console.log(dish.toString());
};

run();
