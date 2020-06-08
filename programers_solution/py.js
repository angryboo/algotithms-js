const solution = (s) => {
  const arr = [...s.toLowerCase()].reduce(
    (a, b) => {
      return b === "p"
        ? [a[0] + 1, a[1]]
        : b === "y"
        ? [a[0] - 1, a[1]]
        : [a[0], a[1] + 1];
    },
    [0, 0]
  );
  return arr[1] === s.length ? false : !arr[0] || false;
};
console.log(solution("pPoooyY"));
console.log(solution("pYY"));
console.log(solution("gg"));
