// const fs = require('fs'); //파일을 읽어오기 위해 사용
// const filepath =
// process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
// let input = fs.readFileSync(filepath).toString().trim().split("\n");

// 예시 let fruits = ["apple","banana","orange","mellon"];

//프로세스
//질문기능
const question_obj = 
[ 
   {questions:"Q1.해당 매장을 방문시 매장은 청결 하였습니까?"},
   {questions:"Q2.주문시 직원은 고객님께 친절 하였습니까?"},  
   {questions:"Q3.주문하신 음료가 나오기까지 시간이 적당하였습니까?"},
   {questions:"Q4.직원이 제조한 음료에 대해 맛은 좋았습니까?"},
   {questions:"Q5.해당 매장을 다음에도 재방문 하실 의향이 있으십니까?"},  
];
//선택기능
let answer = [
    "(1)전혀아니다.",
    "(2)아니다.",
    "(3)보통이다.",
    "(4)그렇다.",
    "(5)매우그렇다."];

//답항기능
let select = [
    "답) (1)",
    "답) (2)",
    "답) (3)",
    "답) (4)",
    "답) (5)",
];
//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
//함수 처리


    for(let i=0;i<question_obj.length;i++){
        if(question_obj[i] == question_obj[0]){
            console.log(question_obj[i].questions);
            console.log(answer[0],answer[1],answer[2]);
            console.log(select[0])
        }else if(question_obj[i] == question_obj[1]){
            console.log(question_obj[i].questions);
            console.log(answer[0],answer[1],answer[2],answer[3]);
            console.log(select[1])
        }else if(question_obj[i] == question_obj[2]){
            console.log(question_obj[i].questions);
            console.log(answer[1],answer[2]);
            console.log(select[2])
        }else if(question_obj[i] == question_obj[3]){
            console.log(question_obj[i].questions);
            console.log(answer[0],answer[1],answer[2],answer[3],answer[4]);
            console.log(select[3])  
        }else if(question_obj[i] == question_obj[4]){
            console.log(question_obj[i].questions);
            console.log(answer[0],answer[1],answer[2]);
            console.log(select[4])
        }        
    }
    console.log("--------------------- 설문자 선택 --------------------------");
    



//출력


            


  
// if(question_obj[0]){
//     for(let i=0;i<question_obj.length;i++){
//         if(question_obj[i] == question_obj[0]){
//             console.log(question_obj[i].questions);
//             console.log(answer[0],answer[1],answer[2]);
//         }else if(question_obj[i] == question_obj[1]){
//             console.log(question_obj[i].questions);
//             console.log(answer[0],answer[1],answer[2],answer[3]);
//         }else if(question_obj[i] == question_obj[2]){
//             console.log(question_obj[i].questions);
//             console.log(answer[1],answer[2]);
//         }else if(question_obj[i] == question_obj[3]){
//             console.log(question_obj[i].questions);
//             console.log(answer[0],answer[1],answer[2],answer[3],answer[4]);  
//         }else if(question_obj[i] == question_obj[4]){
//             console.log(question_obj[i].questions);
//             console.log(answer[0],answer[1],answer[2]);
//         }
//     }
//     }