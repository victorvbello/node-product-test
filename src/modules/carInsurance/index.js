class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }

  stringByDay = (day, beforePrint = () => {}) => {
    const { products } = this;
    beforePrint();
    return `${'\n'}-------- day ${day} --------${'\n'}name, sellIn, price${'\n'}${products
      .map(product => `${product.toString()}`)
      .join('\n')}`;
  };

  stringAll = days => {
    const { products } = this;
    let stringInit = this.stringByDay(0);
    [...Array(days).keys()].forEach(day => {
      stringInit = `${stringInit}${'\n'}${this.stringByDay(day + 1, () =>
        products.forEach(product => product.handleDecrementDate()),
      )}`;
    });
    return stringInit;
  };
}

export default CarInsurance;
