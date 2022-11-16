// string.split(separator, limit)
// split( ) 함수
// 문자열을 'separator'로 잘라서,
// 'limit'크기 이하의 배열에 잘라진 문자열을 저장하여 리턴합니다.

//입력
// 첫째 줄에 정수의 개수 N (1 ≤ N ≤ 1,000,000)이 주어진다. 
// 둘째 줄에는 N개의 정수를 공백으로 구분해서 주어진다.
// 모든 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같은 정수이다.

/*
let statistics_obj = {min : 1, max : 4};
statistics_obj['min'] = 4;

/*데이터 타입
Boolean, Null, Undefined, Number,BigInt,String,Symbol
*/



//공통사항(이부분 복사)
const fs = require('fs'); //파일을 읽어오기 위해 사용
const filepath =
process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let input = fs.readFileSync(filepath).toString().trim().split("\n");


let num = parseInt(input[0]);
let inputs = input[1].split(" ").map(Number);

let min_max = { min: 1000000, max: -1000000 };
for (let i = 0; i < inputs.length; i++) {
  if (min_max.min > inputs[i]) {
    min_max.min = inputs[i];
  }
  if (min_max.max < inputs[i]) {
    min_max.max = inputs[i];
  }
}

console.log(`${min_max.min} ${min_max.max}`);

















//let count = Number(input[0]); 
//배열을 split해서 변수값을 넣으면 str로 들어가기때문에 type을 number로 변경해야한다.

// let numberStr = input[1].split(' ');
// let numbers = numberStr.map(function(cur) {
//   return Number(cur);
// });
// let max = numbers[0];
// let min = numbers[0];
// for(let i=1; i<count; i++){
//     if(max < numbers[i]) max = numbers[i];
//     if(min > numbers[i]) min = numbers[i];    
// }
// console.log(`${min} ${max}`);

