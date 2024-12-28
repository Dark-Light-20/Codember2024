const isPrime = (number) => {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number !== 1;
};

const findHiddenData = (nodes) => {
  const hiddenNodes = nodes.split(",").filter((node) => {
    const value = parseInt(node);
    const digitsSum = node
      .split("")
      .reduce((acc, digit) => parseInt(digit) + acc, 0);
    return isPrime(value) && isPrime(digitsSum);
  });
  return `${hiddenNodes.length}-${hiddenNodes[2]}`;
};

const nodes =
  "13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,155,156,157,158,175,176,177,178,179,180,181,182,183,184,195,196";
console.log(findHiddenData(nodes));
