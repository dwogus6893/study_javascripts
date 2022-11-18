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

function example(i) {
if( 호출을 example(0)하고
    question_list.questions_uid=="Q1"이라면){
    let total1에 answer_list.exampleUid 개수만큼
    example_list.example을 순서대로 출력해라.
}
if( 호출을 example(1)하고
    question_list.questions_uid=="Q2"이라면){
    let total2에 answer_list.exampleUid 개수만큼
    example_list.example을 순서대로 출력해라.
}
if( 호출을 example(2)하고
    question_list.questions_uid=="Q3"이라면){
    let total3에 answer_list.exampleUid 개수만큼
    example_list.example을 순서대로 출력해라.
}
if( 호출을 example(3)하고
    question_list.questions_uid=="Q4"이라면){
    let total4에 answer_list.exampleUid 개수만큼
    example_list.example을 순서대로 출력해라.
}
if( 호출을 example(4)하고 
    question_list.questions_uid=="Q5"이라면){
    let total5에 answer_list.exampleUid 개수만큼
    example_list.example을 순서대로 출력해라.
}
}




// let str ="";
// function example(args) { //보기 항목
//     args.forEach(arg => {
//     console.log(arg);
//     })
//     console.log("");
    
// }
// example([0,1,2]);