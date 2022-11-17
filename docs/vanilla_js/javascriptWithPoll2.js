// ====================입력부분=======================================
let str = "";
const fs = require('fs'); //파일을 읽어오기 위해 사용
const filepath =
process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/answer.txt";
let input = fs.readFileSync(filepath).toString().trim().split("\n");



const question_list = 
[ 
   {questions_uid:"Q1",questions:"해당 매장을 방문시 매장은 청결 하였습니까?",orders:"1"},
   {questions_uid:"Q4",questions:"직원이 제조한 음료에 대해 맛은 좋았습니까?",orders:"4"},
   {questions_uid:"Q2",questions:"주문시 직원은 고객님께 친절 하였습니까?",orders:"2"},
   {questions_uid:"Q5",questions:"해당 매장을 다음에도 재방문 하실 의향이 있으십니까?",orders:"5"},
   {questions_uid:"Q3",questions:"주문하신 음료가 나오기까지 시간이 적당하였습니까?",orders:"3"}
];

const answer_list = 
[ 
    {example_uid:"E5",example:"매우 그렇다", orders:"5"},
     {example_uid:"E1",example:"전혀 아니다",orders:"1"},
     {example_uid:"E4",example:"그렇다",orders:"4"},
     {example_uid:"E2",example:"아니다",orders:"2"},
     {example_uid:"E3",example:"보통이다",orders:"3"},
];


// ====================처리부분=======================================
function question(i) { //설문 질문
    console.log(`${question_list[i]['orders']}. ${question_list[i]['questions']}`);
}

function answer_list(...args) { // 설문 답항
    args.forEach(arg => {
        str += `(${answer[arg]['orders']}) ${nswer[arg]['example']} `;
    })
    console.log(str);
    console.log("");
    str= "";
}

function userAnswer(i) { // 유저 답변
    console.log(`답) (${inputs[i]})\n`);
}



// ====================출력부분=======================================
for(let i =0; i<question_list.length;i++){
    if(question_list[i] == question_list[0]){
    console.log(question_list[i].questions);
    userAnswer;
}
}
