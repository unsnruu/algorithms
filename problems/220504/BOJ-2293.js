//https://www.acmicpc.net/problem/2293

const fs = require("fs");
const [info, ...inputs] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, target] = info.split(" ").map((v) => +v);

function solution() {}
