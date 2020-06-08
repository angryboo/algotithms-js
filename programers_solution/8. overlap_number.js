const solution = (arr) => {
  let ans = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      ans.push(arr[i]);
    }
  }
  return ans;
};

// console.log(solution([1, 1, 3, 3, 0, 1, 1]));

console.log(4 % 2);

const solution = (a, b) => {
  const _a = a < b ? a : b;
  const _b = a >= b ? a : b;
  let ans = 0;

  for (let i = _a; i <= _b; i++) {
    ans += i;
  }
  return ans;
};
