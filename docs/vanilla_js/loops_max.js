/*
//문제
9개의 서로 다른 자연수가 주어질 때, 이들 중 최댓값을 찾고 그 최댓값이 몇 번째 수인지를 구하는 프로그램을 작성하시오.
예를 들어, 서로 다른 9개의 자연수
3, 29, 38, 12, 57, 74, 40, 85, 61
이 주어지면, 이들 중 최댓값은 85이고, 이 값은 8번째 수이다.
//입력
첫째 줄부터 아홉 번째 줄까지 한 줄에 하나의 자연수가 주어진다. 주어지는 자연수는 100 보다 작다.

//출력
첫째 줄에 최댓값을 출력하고, 둘째 줄에 최댓값이 몇 번째 수인지를 출력한다.
*/

//공통사항(이부분 복사)
const fs = require('fs'); //파일을 읽어오기 위해 사용
const filepath =
process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let input = fs.readFileSync(filepath).toString().trim().split("\n");
//여기까지

let max = input[0]; //최대값
let i; //몇 번째 수인지 구하는 프로그램

for(let i=1; i<input.length;i++){
    if(max < input[i]){
        max = input[i];
        indexof = i;
    }
}
console.log(max);
console.log(indexof+1);






// let min_max = { min: 1000000, max: -1000000 };
// for (let i = 0; i < inputs.length; i++) {
//   if (min_max.min > inputs[i]) {
//     min_max.min = inputs[i];
//   }
//   if (min_max.max < inputs[i]) {
//     min_max.max = inputs[i];
//   }
// }

// console.log(`${min_max.min} ${min_max.max}`);