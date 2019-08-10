import { MEDIUM_COVERAGE, SUPER_SALE } from '../../product/constants';
import CarInsuranceModule from '../index';
import ProductModule from '../../product';

let TestCarInsurance = null;
const productsList = [
  new ProductModule(MEDIUM_COVERAGE, 10, 20),
  new ProductModule(SUPER_SALE, 3, 6),
];

describe('Module CarInsurance', () => {
  beforeEach(() => {
    TestCarInsurance = new CarInsuranceModule(productsList);
  });
  it('should return initial values of products', () => {
    const { products } = TestCarInsurance;
    expect(products).toContain(productsList[0]);
  });
  it('should return default values of products', () => {
    const EmptyCarInsurance = new CarInsuranceModule();
    const { products } = EmptyCarInsurance;
    expect(products).toMatchObject([]);
  });
  it('should return products in string format by day', () => {
    const string = TestCarInsurance.stringByDay(1);
    expect(string).toMatch(/-------- day 1 --------/);
    expect(string).toMatch(/name, sellIn, price/);
    expect(string).toMatch(/Medium Coverage, 10, 20/);
  });
  it('should return products in string format fort all days', () => {
    const string = TestCarInsurance.stringAll(5);
    expect(string).toMatch(/-------- day 0 --------/);
    expect(string).toMatch(/-------- day 1 --------/);
    expect(string).toMatch(/-------- day 3 --------/);
    expect(string).toMatch(/-------- day 5 --------/);
    expect(string).toMatch(/name, sellIn, price/);
    expect(string).toMatch(/Medium Coverage, 10, 20/);
    expect(string).toMatch(/Medium Coverage, 9, 19/);
    expect(string).toMatch(/Medium Coverage, 7, 17/);
    expect(string).toMatch(/Medium Coverage, 5, 15/);
  });
});
