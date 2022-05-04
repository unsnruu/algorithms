// https://www.acmicpc.net/problem/12865

//1. 무게가 K만큼 한정되어있을 때, 최대의 행복의 가치 값을 구하는 문제
const fs = require("fs");
let [info, ...inputs] = fs.readFileSync("/dev/stdin").toString().trim();
const [N, K] = info.split(" ").map((v) => +v);
inputs = inputs.map((input) => input.split(" ").map((v) => +v));

function solution(numOfItems, WeightLimit, items) {
  for(let i=01; i<numOfItems; i++){
    for
  }
}
