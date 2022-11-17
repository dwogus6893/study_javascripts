//function name(parameter1,parameter2,parameter3) {
// code to be executed, 코드를 처리하면서 
// return
// }

//param :2(1 + 3), return 1(1+3)
// function sum(item_first,item_second){
//     return item_first+item_second;
// }

// {
//     let sum_number = 1 + 3;
//     sum_number = 3 + 5;
//     sum_number = 6 + 9;
//     let sum_function = sum(1, 2) // item_first=1, item_second=2
//     console.log();
// }

// {
//     console.log(`${calculateSum(5,7)}`);   
// }

// //param :2(1 + 3), return 1(1+3)
// function sum(item_first,item_second){
//     return item_first+item_second;
// }
// //anonymouse Function 이름없는 기능 = 호출할 수 없다.
// let calculateSum = function (item_first,item_second){
//     return item_first + item_second
// };

// //Arrow Function '=>'를 넣어줌,Function 대체 
// let calculateSumSecond = (item_first,item_second) => {
//     return item_first + item_second
// };
// {
//         console.log(`${calculateSumSecond(7,8)}`)


//     }


// //

function printRestParams(...args){
    let restParam = (arg) => {
        if(typeof arg == 'object'){
        }
        console.log(`arg :${arg}`);

    }
    args.forEach(restParam);
}

{
    printRestParams(2, 4, 5);
    printRestParams(2,4,5,6,7);
}
