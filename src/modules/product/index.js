import { CapitalizeConst } from './constants';
import Rules from './rules';

class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }

  handleDecrementDate = () => {
    const { name, sellIn, price } = this;
    const typeRules = Rules.find(item => item.id === name);
    if (!typeRules) return;
    const {
      priceLimit,
      priceOnDatePassed,
      priceOnDecrementDate,
      dateDecrement,
    } = typeRules;
    if (!dateDecrement) return;
    const newSellIn = sellIn - 1;
    const newPrice =
      sellIn <= 0
        ? priceOnDatePassed({ price, priceLimit, sellIn })
        : priceOnDecrementDate({ price, priceLimit, sellIn });
    this.sellIn = newSellIn;
    this.price = newPrice;
  };

  toString = () => {
    const { name, sellIn, price } = this;
    const printName = CapitalizeConst(name);
    return `${printName}, ${sellIn}, ${price}`;
  };
}

export default Product;
