module.exports = function getZerosCount(number, base) {

  const factorization = (base, divider, acc) => {
    if (base === 1) {
      return acc;
    }
    if (base % divider === 0) {
      return factorization(base / divider, divider, [...acc, divider]);
    } else {
      return factorization(base, divider + 1, acc);
    }
  };

  const frequency = (num, div, power) => {
    const divider = Math.pow(div, power);
    return (num < divider ? 0 : Math.floor(num / divider) + frequency(num, div, power + 1));
  };

  const count = (array, num) => array.reduce((acc, item) => (item === num ? acc + 1 : acc), 0);

  const factors = factorization(base, 2, []);
  const uniqFactors = factors.reduce((acc, item) => (acc.includes(item) ? acc : [...acc, item]), []);
  const frequencies = uniqFactors.map(item => Math.floor(frequency(number, item, 1) / count(factors, item)));

  return Math.min(...frequencies);
};