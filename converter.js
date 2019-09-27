const converArray = array => {
  const result = [];

  if (array.length === 0) {
    result.push('Empty array');
  }

  for (let i = 0; i < array.length; i++) {
    if (isNaN(parseInt(array[i]))) {
      result.push(array[i]);
    } else {
      result.push(parseInt(array[i]));
    }
  }

  return result;
};

module.exports = converArray;
