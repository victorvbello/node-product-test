import {
  MEDIUM_COVERAGE,
  LOW_COVERAGE,
  FULL_COVERAGE,
  MEGA_COVERAGE,
  SPECIAL_FULL_COVERAGE,
  SUPER_SALE,
} from './modules/product/constants';
import ProductModule from './modules/product';
import CarInsuranceModule from './modules/carInsurance';

const products = [
  new ProductModule(MEDIUM_COVERAGE, 10, 20),
  new ProductModule(FULL_COVERAGE, 2, 0),
  new ProductModule(LOW_COVERAGE, 5, 7),
  new ProductModule(MEGA_COVERAGE, 0, 80),
  new ProductModule(MEGA_COVERAGE, -1, 80),
  new ProductModule(SPECIAL_FULL_COVERAGE, 15, 20),
  new ProductModule(SPECIAL_FULL_COVERAGE, 10, 49),
  new ProductModule(SPECIAL_FULL_COVERAGE, 5, 49),
  new ProductModule(SUPER_SALE, 3, 6),
];

const carInsurance = new CarInsuranceModule(products);
// eslint-disable-next-line no-console
console.log(carInsurance.stringAll(30));
