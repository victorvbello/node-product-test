import {
  NORMAL,
  MEDIUM_COVERAGE,
  LOW_COVERAGE,
  FULL_COVERAGE,
  MEGA_COVERAGE,
  SPECIAL_FULL_COVERAGE,
  SUPER_SALE,
} from './constants';

export const DEFAULT_TYPE_CONFIG = {
  priceOnDecrementDate: ({ price }) => (price - 1 >= 0 ? price - 1 : price),
  priceOnDatePassed: ({ price }) => (price - 2 >= 0 ? price - 2 : price),
  priceLimit: 50,
  dateDecrement: true,
};

const Rules = [
  {
    id: NORMAL,
    ...DEFAULT_TYPE_CONFIG,
  },
  {
    id: MEDIUM_COVERAGE,
    ...DEFAULT_TYPE_CONFIG,
  },
  {
    id: LOW_COVERAGE,
    ...DEFAULT_TYPE_CONFIG,
  },
  {
    id: FULL_COVERAGE,
    ...DEFAULT_TYPE_CONFIG,
    priceOnDecrementDate: ({ price, priceLimit }) =>
      price + 1 <= priceLimit ? price + 1 : price,
    priceOnDatePassed: ({ price, priceLimit }) =>
      price + 2 <= priceLimit ? price + 2 : price,
  },
  {
    id: MEGA_COVERAGE,
    ...DEFAULT_TYPE_CONFIG,
    priceOnDecrementDate: ({ price }) => price,
    priceOnDatePassed: ({ price }) => price,
    dateDecrement: false,
    priceLimit: 80,
  },
  {
    id: SPECIAL_FULL_COVERAGE,
    ...DEFAULT_TYPE_CONFIG,
    priceOnDecrementDate: ({ price, priceLimit, sellIn }) => {
      if (sellIn <= 0) return 0;
      let priceIncrement = 0;
      switch (true) {
        case sellIn <= 5:
          priceIncrement = 3;
          break;
        case sellIn <= 10:
          priceIncrement = 2;
          break;
        default:
          priceIncrement = 1;
          break;
      }
      return price + priceIncrement <= priceLimit
        ? price + priceIncrement
        : price;
    },
    priceOnDatePassed: () => 0,
  },
  {
    id: SUPER_SALE,
    ...DEFAULT_TYPE_CONFIG,
    priceOnDecrementDate: ({ price }) => (price - 2 >= 0 ? price - 2 : price),
  },
];

export default Rules;
