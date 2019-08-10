import { Products, CarInsurance } from '../index';
import ProductModule from '../modules/product';
import CarInsuranceModule from '../modules/carInsurance';

global.console = {
  log: jest.fn(),
};

describe('Global', () => {
  describe('should products array', () => {
    Products.forEach(product => {
      it('should product instance', () => {
        expect(product).toBeInstanceOf(ProductModule);
      });
    });
  });
  it('should CarInsurance instance', () => {
    expect(CarInsurance).toBeInstanceOf(CarInsuranceModule);
  });
  it('should console a message', () => {
    // eslint-disable-next-line no-console
    console.log('Tets Log');
    expect(global.console.log).toHaveBeenCalledWith('Tets Log');
  });
});
