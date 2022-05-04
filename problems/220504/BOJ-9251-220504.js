//https://www.acmicpc.net/problem/9251
// 풀이 참조 : https://st-lab.tistory.com/139?category=868019
//Top-down
function LCS(x, y) {
  if (x === -1 || y === -1) {
    return 0;
  }

  if (dp[x][y] === null) {
    dp[x][y] = 0;

    if (str1[x] === str2[y]) {
      dp[x][y] = LCS(x - 1, y - 1) + 1;
    } else {
      dp[x][y] = Math.max(LCS(x - 1, y), LCS(x - 1, y - 1));
    }
  }
  return dp[x][y];
}

//Bottom-up
function iterationLCS(str1, str2) {
  const dp = Array.from({ length: str1.length + 1 }, () =>
    Array.from({ length: str2.length + 1 })
  );

  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp;
}
