class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }

  printByDay = (day, beforePrint = () => {}) => {
    const { products } = this;
    // eslint-disable-next-line no-console
    console.log(`-------- day ${day} --------`);
    // eslint-disable-next-line no-console
    console.log('name, sellIn, price');
    beforePrint();
    products.forEach(product => product.print());
    // eslint-disable-next-line no-console
    console.log('');
  };

  printAll = days => {
    const { products } = this;
    this.printByDay(0);
    [...Array(days).keys()].forEach(day => {
      this.printByDay(day + 1, () =>
        products.forEach(product => product.handleDecrementDate()),
      );
    });
  };
}

export default CarInsurance;
