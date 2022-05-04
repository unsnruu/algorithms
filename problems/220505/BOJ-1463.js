///https://www.acmicpc.net/problem/1463
// 풀이 참고: https://hongcoding.tistory.com/46

// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim();
// input = +input;

// function solution(X) {
//   if (X === 1) return 0;
//   //dp는 X를 구하는 최소한의 연산 사용 횟수
//   const dp = [0, 0];
//   for (let i = 2; i <= X; i++) {
//     dp[i] = dp[i - 1] + 1;
//     if (i % 2 === 0) {
//       dp[i] = Math.min(dp[i], dp[i / 2] + 1);
//     }
//     if (i % 3 === 0) {
//       dp[i] = Math.min(dp[i], dp[i / 3] + 1);
//     }
//   }
//   return dp;
// }
// solution(10);

//bruet force 실패 = StackSizeExceeded
// function solution(num) {
//   if (num === 1) return 0;

//   let answer = [];

//   (function recursive(acc, depth = 0) {
//     if (acc === 1) return answer.push(depth);
//     if (acc < 1) return;

//     recursive(acc - 1, depth + 1);
//     if (acc % 2 === 0) recursive(acc / 2, depth + 1);
//     if (acc % 3 === 0) recursive(acc / 3, depth + 1);
//   })(num);

//   answer.sort((a, b) => a - b);
//   return answer[0];
// }
// console.log(solution(input));
