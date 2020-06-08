// const solution = (str, n) => {
//   const ans = str.sort((a, b) => (a[n] === b[n] ? a > b : a[n] > b[n] ? 1 : 0));
//   return ans;
// };

const solution = (str, n) => {
  const ans = str.sort((a, b) =>
    a[n] > b[n] ? 1 : a[n] < b[n] ? -1 : a > b ? 1 : -1
  );
  return ans;
};

console.log(solution(["sun", "bed", "car"], 1));
console.log(solution(["abce", "abcd", "cdx"], 2));
