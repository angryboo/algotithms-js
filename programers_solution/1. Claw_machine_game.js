// 프로그래머스 1단계
// 크레인 인형뽑기 게임
// 문제 link - https://programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
  let answer = 0;
  const tempArray = [];
  moves.forEach((move) => {
    let complete = false;
    for (let i = 0; i < board[move - 1].length; i++) {
      const item = board[i][move - 1];
      const last = tempArray.length - 1;
      if (item === 0 || complete) {
        continue;
      } else if (item === tempArray[last]) {
        tempArray.pop();
        answer += 2;
      } else {
        tempArray.push(item);
      }
      board[i][move - 1] = 0;
      complete = true;
    }
  });
  return answer;
}

solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
);
