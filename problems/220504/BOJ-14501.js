//https://www.acmicpc.net/problem/14501
//풀이 참고 : https://developer-hm.tistory.com/193
const fs = require("fs");
let [N, ...inputs] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// const fs = `
// 7
// 3 10
// 5 20
// 1 10
// 1 20
// 2 15
// 4 40
// 2 200`;
// let [N, ...inputs] = fs.toString().trim().split("\n");

N = +N;
inputs = inputs.map((input) => input.split(" ").map((v) => +v));

const times = inputs.map((v) => v[0]);
const payments = inputs.map((v) => v[1]);

// brute로 푸니까 실패
function solution(leftDay, schedule) {
  //0일차는 없는 것
  const cases = [];
  (function recursive(acc = 0, depth = 0) {
    const today = schedule[depth];
    const [takeDay, payment] = today;
    if (leftDay - depth < takeDay) {
      return cases.push(acc);
    }

    recursive(acc + payment, depth + takeDay);
    recursive(acc, depth + 1);
  })();

  console.log(Math.max(...cases));
}
solution(N, inputs);

function solution(leftDay, schedule) {
  const dp = Array.from({ length: schedule.length + 1 }, () => 0);

  for (let curDay = 0; curDay < leftDay; curDay++) {
    if (curDay + times[curDay] <= leftDay) {
      dp[curDay + times[curDay]] = Math.max(
        dp[curDay + times[curDay]],
        dp[curDay] + payments[curDay]
      );
    }
    dp[curDay + 1] = Math.max(dp[curDay], dp[curDay + 1]);
  }
  console.log(dp[leftDay]);
}

solution(N, inputs);
