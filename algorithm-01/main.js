// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다.
// 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다.
// 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

const fs = require("fs");
const path = require("path");

const pathDir = __dirname;

function readTestFile(fileName) {
  return fs.readFileSync(fileName).toString();
}

function runTest(fileName) {
  const input = readTestFile(fileName).split(" ");
  const temp = [...(+input + "")].reduce((acc, cur) => +acc + +cur, 0);
  console.log(!(+input % temp));
}

data => {
  const n = data.split(" ");
  const a = Number(n[0]), b = Number(n[1]);
  let answer = '';
  for (let i = 0; i < b; i++) {
      for (let j = 0; j < a; j++) {
          answer += '*';
      }
      answer += '\n';
  }
  console.log(answer);
});

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
