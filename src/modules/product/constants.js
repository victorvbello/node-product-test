export const NORMAL = 'NORMAL';
export const MEDIUM_COVERAGE = 'MEDIUM_COVERAGE';
export const LOW_COVERAGE = 'LOW_COVERAGE';
export const FULL_COVERAGE = 'FULL_COVERAGE';
export const MEGA_COVERAGE = 'MEGA_COVERAGE';
export const SPECIAL_FULL_COVERAGE = 'SPECIAL_FULL_COVERAGE';
export const SUPER_SALE = 'SUPER_SALE';

export const CapitalizeConst = constant =>
  constant
    .toLowerCase()
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
