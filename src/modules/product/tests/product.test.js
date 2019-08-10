import { SUPER_SALE, MEGA_COVERAGE, CapitalizeConst } from '../constants';
import ProductModule from '../index';
import Rules from '../rules';

let TestProduct = null;
const INVALID_NAME = 'INVALID_NAME';
const SUPER_SALE_RULE = Rules.find(rule => rule.id === SUPER_SALE);

describe('Module Products', () => {
  beforeEach(() => {
    TestProduct = new ProductModule(SUPER_SALE, 3, 6);
  });
  it('should return initial values of product', () => {
    const { name, sellIn, price } = TestProduct;
    const result = { name: SUPER_SALE, sellIn: 3, price: 6 };
    expect({ name, sellIn, price }).toStrictEqual(result);
  });
  describe('Decrement date', () => {
    it('should not change price and date when using invalid name', () => {
      const ErrorProduct = new ProductModule(INVALID_NAME, 3, 6);
      const { name, sellIn, price } = ErrorProduct;
      ErrorProduct.handleDecrementDate();
      const result = { name: INVALID_NAME, sellIn: 3, price: 6 };
      expect({ name, sellIn, price }).toStrictEqual(result);
    });
    it('should not change price and date when using legendary product', () => {
      const NotChangeProduct = new ProductModule(MEGA_COVERAGE, 3, 6);
      const { name, sellIn, price } = NotChangeProduct;
      NotChangeProduct.handleDecrementDate();
      const result = { name: MEGA_COVERAGE, sellIn: 3, price: 6 };
      expect({ name, sellIn, price }).toStrictEqual(result);
    });
    it('should change price when date is passed', () => {
      TestProduct.handleDecrementDate();
      TestProduct.handleDecrementDate();
      TestProduct.handleDecrementDate();
      TestProduct.handleDecrementDate();
      const { sellIn, price } = TestProduct;
      const finalPrice = SUPER_SALE_RULE.priceOnDatePassed({ price: 0 });
      expect({ price, sellIn }).toStrictEqual({
        price: finalPrice,
        sellIn: -1,
      });
    });
    it('should change price and date', () => {
      TestProduct.handleDecrementDate();
      const { name, sellIn, price } = TestProduct;
      const result = { name: SUPER_SALE, sellIn: 2, price: 4 };
      expect({ name, sellIn, price }).toStrictEqual(result);
    });
  });
  it('should return product in string format', () => {
    const { name, sellIn, price } = TestProduct;
    const printName = CapitalizeConst(name);
    const result = `${printName}, ${sellIn}, ${price}`;
    expect(TestProduct.toString()).toStrictEqual(result);
  });
});
