// 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
// 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

const fs = require("fs");
const path = require("path");

const pathDir = __dirname;

function readTestFile(fileName) {
  return fs.readFileSync(fileName).toString();
}

function runTest(fileName) {
  const input = readTestFile(fileName).split(" ");
  const a = parseInt(input[0]);
  const b = parseInt(input[1]);
  let answer = "";
  for (let i = 0; i < b; i++) {
    for (let j = 0; j < a; j++) {
      answer += "*";
    }
    answer += "\n";
  }
  console.log(answer);
}

fs.readdir(pathDir, (err, files) => {
  files.forEach((file) => {
    if (file.split(".")[1] !== "txt") {
      return;
    }

    console.log(`Testing ${file}...`);
    console.log("====================================");
    console.log("Test Ouput:");

    const tStart = new Date().getTime();
    runTest(path.join(pathDir, file));
    const tDiff = new Date().getTime() - tStart;

    console.log(`${tDiff}ms ellapsed.`);
    console.log("====================================\n");
  });
});
