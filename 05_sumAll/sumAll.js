const sumAll = function (start, end) {
  if (
    start < 0 ||
    end < 0 ||
    typeof start != "number" ||
    typeof end != "number"
  )
    return "ERROR";

  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }

  let sumInRange = 0;
  for (let number = start; number <= end; number++) {
    sumInRange += number;
  }

  return sumInRange;
};

// Do not edit below this line
module.exports = sumAll;
