const solution = (a, b) => {
  const weeks = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const today = new Date(2016, a - 1, b);
  return weeks[today.getDay()];
};

console.log(solution(5, 24));
