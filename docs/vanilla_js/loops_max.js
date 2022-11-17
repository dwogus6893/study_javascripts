// 문제
// 9개의 서로 다른 자연수가 주어질 때, 이들 중 최댓값을 찾고 그 최댓값이 몇 번째 수인지를 구하는 프로그램을 작성하시오.
// 예를 들어, 서로 다른 9개의 자연수
// 3, 29, 38, 12, 57, 74, 40, 85, 61
// 이 주어지면, 이들 중 최댓값은 85이고, 이 값은 8번째 수이다.

// 입력
// 첫째 줄부터 아홉 번째 줄까지 한 줄에 하나의 자연수가 주어진다. 주어지는 자연수는 100 보다 작다.

// 출력
// 첫째 줄에 최댓값을 출력하고, 둘째 줄에 최댓값이 몇 번째 수인지를 출력한다.

//공동부분 
const fs = require('fs');
const filepath =
process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split("\n").map(Number);
// let max = 0;
// let index = 0;

//-------------------------function 미적용
// for(let i =0 ; i<inputs.length ; i++) { //inputs 길이만큼 반복
//     if(max < inputs[i]) {       //Max가 inputs보다 작다면
//         max = inputs[i];        //그 inputs 값이 max
//         index = i;              //index에 그 i값 저장
//     }
// }
// console.log()

// console.log(`${max}\n${index+1}`); 

//-------------------------for of 문 적용
// var iterable = [3, 29, 38, 12, 57, 74, 40, 85, 61];

// for(let value of iterable){
//     console.log(value);
// }    

let max_num = inputs[0];
let index_num = 0;
for (let i = 0; i< inputs.length; i++){
    if(max_num <= inputs[i])    {
        max_num = inputs[i];
    index_num = i+1;
    }
}
console.log(max_num);
console.log(index_num);




