const removeFromArray = function (...args) {
  const array = args[0];
  const finalArray = [];

  array.forEach((item) => {
    if (!args.includes(item)) {
      finalArray.push(item);
    }
  });

  return finalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
