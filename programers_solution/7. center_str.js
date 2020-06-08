const solution = (s) => {
  return s.length % 2
    ? s[Math.round(s.length / 2) - 1]
    : s.slice(s.length / 2 - 1, s.length / 2 + 1);
};

console.log(solution("abcdeqwdd"));
console.log(solution("qwer"));
