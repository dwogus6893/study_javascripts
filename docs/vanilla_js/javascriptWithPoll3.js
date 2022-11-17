// ====================입력부분=======================================
let str = "";
const { setDefaultResultOrder } = require('dns');
const fs = require('fs'); //파일을 읽어오기 위해 사용
const { totalmem } = require('os');
const filepath =
process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/answer.txt";
let input = fs.readFileSync(filepath).toString().trim().split("\n");


//설문 문항들
let question_list = 
[ 
   {questions_uid:"Q1",questions:"해당 매장을 방문시 매장은 청결 하였습니까?",orders:"1"},
   {questions_uid:"Q4",questions:"직원이 제조한 음료에 대해 맛은 좋았습니까?",orders:"4"},
   {questions_uid:"Q2",questions:"주문시 직원은 고객님께 친절 하였습니까?",orders:"2"},
   {questions_uid:"Q5",questions:"해당 매장을 다음에도 재방문 하실 의향이 있으십니까?",orders:"5"},
   {questions_uid:"Q3",questions:"주문하신 음료가 나오기까지 시간이 적당하였습니까?",orders:"3"}
];

//보기 항목들
let example_list = 
[ 
    {example_uid:"E5",example:"매우 그렇다", orders:"5"},
    {example_uid:"E1",example:"전혀 아니다",orders:"1"},
    {example_uid:"E4",example:"그렇다",orders:"4"},
    {example_uid:"E2",example:"아니다",orders:"2"},
    {example_uid:"E3",example:"보통이다",orders:"3"},
];
//응답항목 이거 어떻게 써야할지 모름
let answer_list = 
[
    { questionUid: "Q1", exampleUid: "E1" },
    { questionUid: "Q1", exampleUid: "E2" },
    { questionUid: "Q1", exampleUid: "E3" },//Q1 = 3개
    { questionUid: "Q2", exampleUid: "E1" },
    { questionUid: "Q2", exampleUid: "E2" },
    { questionUid: "Q2", exampleUid: "E3" },
    { questionUid: "Q2", exampleUid: "E4" },//Q2 = 4개
    { questionUid: "Q3", exampleUid: "E1" },
    { questionUid: "Q3", exampleUid: "E2" },//Q3 = 2개
    { questionUid: "Q4", exampleUid: "E1" },
    { questionUid: "Q4", exampleUid: "E2" },
    { questionUid: "Q4", exampleUid: "E3" },
    { questionUid: "Q4", exampleUid: "E4" },
    { questionUid: "Q4", exampleUid: "E5" },//Q4 = 5개
    { questionUid: "Q5", exampleUid: "E1" },
    { questionUid: "Q5", exampleUid: "E2" },
    { questionUid: "Q5", exampleUid: "E3" } //Q5 = 3개
];
//이대로 뽑아내면 순서가 뒤죽박죽이라 orders를 기준으로 정렬

//====================처리부분=======================================
//1.뒤죽박죽되어있는것을 sort로 재정렬해준다.
//https://www.w3schools.com/js/js_array_sort.asp 참고
question_list.sort(function(a,b){return a['orders'] - b['orders']});
example_list.sort(function(a,b){return a['orders'] - b['orders']});

//2.function을 만들어 각각의 항목을 소환?할 수 있도록 한다. 
//https://curryyou.tistory.com/185 참고
function question(i){
    console.log(`${question_list[i]['orders']}. ${question_list[i]['questions']}`);
}


function example(... args) { //보기 항목
    args.forEach(arg => {
    str += `(${example_list[arg]['orders']}) ${example_list[arg]['example']} `;
    })
    console.log(str);
    console.log("");
    str= "";
}



function answer(i){    
    console.log(`답) (${input[i]})`);
   
}

//3. 질문사항을 뽑을 출력부분 
//====================출력 부분==========================================
for(let i = 0 ; i<question_list.length; i++) {
    question(i);
    switch(i) {
            case 0:
                example(0,1,2);
                answer(i);
              break;
            case 1:
                example(0,1,2,3);
                answer(i);
                break;
            case 2:
                example(0,1);
                answer(i);
                 break;    
            case 3:
                example(0,1,2,3,4);
                answer(i);
                break;
            case 4:
                example(0,1,2);
                answer(i);
                break;
            }       
}

console.log("====================설문자 선택 =======================================");

for(let i = 0 ; i<question_list.length; i++) {
    question(i);
    answer(i);
}

console.log("이용해주셔서 감사합니다!");