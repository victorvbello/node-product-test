import Rules, { DEFAULT_TYPE_CONFIG } from '../rules';

import {
  FULL_COVERAGE,
  MEGA_COVERAGE,
  SPECIAL_FULL_COVERAGE,
  SUPER_SALE,
} from '../constants';

const FULL_COVERAGE_ITEM = Rules.find(rule => rule.id === FULL_COVERAGE);
const MEGA_COVERAGE_ITEM = Rules.find(rule => rule.id === MEGA_COVERAGE);
const SPECIAL_FULL_COVERAGE_ITEM = Rules.find(
  rule => rule.id === SPECIAL_FULL_COVERAGE,
);
const SUPER_SALE_ITEM = Rules.find(rule => rule.id === SUPER_SALE);

describe('Rules', () => {
  describe('Default Rule', () => {
    describe('Price decrement', () => {
      it('should return price decrement on >= 0', () => {
        const price = 10;
        expect(DEFAULT_TYPE_CONFIG.priceOnDecrementDate({ price })).toBe(
          price - 1,
        );
      });

      it('should return price decrement on < 0', () => {
        const price = -1;
        expect(DEFAULT_TYPE_CONFIG.priceOnDecrementDate({ price })).not.toBe(
          price - 1,
        );
      });
    });
    describe('Price decrement when date has passed', () => {
      it('should return price decrement on >= 0', () => {
        const price = 10;
        expect(DEFAULT_TYPE_CONFIG.priceOnDatePassed({ price })).toBe(
          price - 2,
        );
      });

      it('should return price decrement on < 0', () => {
        const price = -1;
        expect(DEFAULT_TYPE_CONFIG.priceOnDatePassed({ price })).not.toBe(
          price - 1,
        );
      });
    });
  });
  describe('Full coverage', () => {
    describe('Price decrement', () => {
      it('should return price decrement on >= priceLimit', () => {
        const price = 10;
        const priceLimit = 20;
        expect(
          FULL_COVERAGE_ITEM.priceOnDecrementDate({ price, priceLimit }),
        ).toBe(price + 1);
      });

      it('should return price decrement on <= priceLimit', () => {
        const price = 10;
        const priceLimit = 9;
        expect(
          FULL_COVERAGE_ITEM.priceOnDecrementDate({ price, priceLimit }),
        ).not.toBe(price + 1);
      });
    });
    describe('Price decrement when date has passed', () => {
      it('should return price decrement on >= priceLimit', () => {
        const price = 10;
        const priceLimit = 20;
        expect(
          FULL_COVERAGE_ITEM.priceOnDatePassed({ price, priceLimit }),
        ).toBe(price + 2);
      });

      it('should return price decrement on <= priceLimit', () => {
        const price = 10;
        const priceLimit = 11;
        expect(
          FULL_COVERAGE_ITEM.priceOnDatePassed({ price, priceLimit }),
        ).not.toBe(price + 2);
      });
    });
  });
  describe('Mega coverage', () => {
    describe('Price decrement', () => {
      it('should return price decrement on >= 0', () => {
        const price = 10;
        expect(MEGA_COVERAGE_ITEM.priceOnDecrementDate({ price })).toBe(price);
      });

      it('should return price decrement on < 0', () => {
        const price = 10;
        expect(MEGA_COVERAGE_ITEM.priceOnDecrementDate({ price })).not.toBe(
          price + 1,
        );
      });
    });
    describe('Price decrement when date has passed', () => {
      it('should return price decrement on >= 0', () => {
        const price = 10;
        expect(MEGA_COVERAGE_ITEM.priceOnDatePassed({ price })).toBe(price);
      });

      it('should return price decrement on < 0', () => {
        const price = 10;
        expect(MEGA_COVERAGE_ITEM.priceOnDatePassed({ price })).not.toBe(
          price + 1,
        );
      });
    });
  });
  describe('Special full coverage', () => {
    describe('Price decrement', () => {
      it('should return price = 0 when sell in end', () => {
        const price = 10;
        const priceLimit = 20;
        const sellIn = 0;
        expect(
          SPECIAL_FULL_COVERAGE_ITEM.priceOnDecrementDate({
            price,
            priceLimit,
            sellIn,
          }),
        ).toBe(0);
      });
      it('should return price increment = 3 when sell in <= 5', () => {
        const price = 10;
        const priceLimit = 20;
        const sellIn = 4;
        expect(
          SPECIAL_FULL_COVERAGE_ITEM.priceOnDecrementDate({
            price,
            priceLimit,
            sellIn,
          }),
        ).toBe(price + 3);
      });
      it('should return price increment = 2 when sell in <= 10', () => {
        const price = 10;
        const priceLimit = 20;
        const sellIn = 9;
        expect(
          SPECIAL_FULL_COVERAGE_ITEM.priceOnDecrementDate({
            price,
            priceLimit,
            sellIn,
          }),
        ).toBe(price + 2);
      });
      it('should return price increment = 1 when sell in > 10', () => {
        const price = 10;
        const priceLimit = 20;
        const sellIn = 11;
        expect(
          SPECIAL_FULL_COVERAGE_ITEM.priceOnDecrementDate({
            price,
            priceLimit,
            sellIn,
          }),
        ).toBe(price + 1);
      });
      it('should return price increment = 0 when > priceLimit', () => {
        const price = 9;
        const priceLimit = 11;
        const sellIn = 4;
        expect(
          SPECIAL_FULL_COVERAGE_ITEM.priceOnDecrementDate({
            price,
            priceLimit,
            sellIn,
          }),
        ).toBe(price);
      });
    });
    describe('Price decrement when date has passed', () => {
      it('should return price = 0', () => {
        const price = 10;
        expect(SPECIAL_FULL_COVERAGE_ITEM.priceOnDatePassed({ price })).toBe(0);
      });

      it('should return price = 0', () => {
        const price = 10;
        expect(
          SPECIAL_FULL_COVERAGE_ITEM.priceOnDatePassed({ price }),
        ).not.toBe(price);
      });
    });
  });
  describe('Super sale', () => {
    describe('Price decrement', () => {
      it('should return price decrement on >= 0', () => {
        const price = 10;
        expect(SUPER_SALE_ITEM.priceOnDecrementDate({ price })).toBe(price - 2);
      });

      it('should return price decrement on <= 0', () => {
        const price = 1;
        expect(SUPER_SALE_ITEM.priceOnDecrementDate({ price })).not.toBe(
          price - 2,
        );
      });
    });
  });
});
