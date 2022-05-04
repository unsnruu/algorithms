//https://www.acmicpc.net/problem/2293
// https://debuglog.tistory.com/78
// const fs = require("fs");
// const [info, ...inputs] = fs
// .readFileSync("/dev/stdin")
// .toString()
// .trim()
// .split("\n");

const fs = `
3 10
1
2
5`;
const [info, ...inputs] = fs.toString().trim().split("\n");
const coins = inputs.map((v) => +v);
const [n, target] = info.split(" ").map((v) => +v);

function solution(target) {
  const dp = Array.from({ length: target + 1 }, (v) => 0);
  dp[0] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= target; j++) {
      if (j >= coins[i]) {
        dp[j] = dp[j] + dp[j - coins[i]];
      }
    }
  }
  return dp;
}
solution(target);
