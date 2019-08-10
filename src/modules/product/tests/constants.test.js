import { CapitalizeConst, NORMAL } from '../constants';

describe('Constants', () => {
  it('should return capitalize value of NORMAL', () => {
    expect(CapitalizeConst(NORMAL)).toBe('Normal');
  });
});
