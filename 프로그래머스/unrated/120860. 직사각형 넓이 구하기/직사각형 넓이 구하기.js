const solution = (arr) => {
  let answer = 0;
  let x = [];
  let y = [];

  arr.forEach((element) => {
    x.push(element[0]);
    y.push(element[1]);
  });



  const getMaxNumber = (arr) => {
    return Math.max(...arr);
  };

  const getMinNumber = (arr) => {
    return Math.min(...arr);
  };

  answer =
    (getMaxNumber(x) - getMinNumber(x)) * (getMaxNumber(y) - getMinNumber(y));

  return answer;
};
