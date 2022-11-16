/*정수 n개가 주어졌을 때, n개의 합을 구하는 함수를 작성하시오.

작성해야 하는 함수는 다음과 같다.*/

function sum(N){
    let sum = 0;
         for(let hap of N){
            sum += hap;
             }
    return sum;
}

let arr =  [1,2,3,4,5];
 console.log(sum(arr));


 //여기는 for of 반복문 연습
 let items = [1,2,3,4,5];
 for(let value of items){
    console.log(value);
 }

 function A(N){
    let sum = 0;
    for(let B of N){
        sum += B;
    }
    return sum;
 }
 let arr2 = [1,2,3,4,5,6]
 console.log(sum(arr2));
