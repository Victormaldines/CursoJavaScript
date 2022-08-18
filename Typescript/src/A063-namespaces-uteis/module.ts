import _ from 'lodash';

_.mul = function (array: number[]): number {
  return array.reduce((acc, value) => (acc *= value), 1);
};

global.SLAGLOBAL = 'AAAAAAAAGLOBALSLA';

export default _;
