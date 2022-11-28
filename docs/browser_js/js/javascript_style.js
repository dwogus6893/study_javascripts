//Remove : 공간 차지 하지 않고 사라짐.
let queryimgRemove = document.querySelector("#removeid");
queryimgRemove.addEventListener("click", (event) => {
    imgRemoveEvent(event);
});
function imgRemoveEvent(event){
   queryimgRemove.style.display="none";
}

//Hidden : 공간은 차지 하고 보이지 않음.
let queryimgHidden = document.querySelector("#hiddenid");
queryimgHidden.addEventListener("click", (event) => {
    imgHiddenEvent(event);
});
function imgHiddenEvent(event){
    queryimgHidden.style.visibility = "hidden";
}

//Resetㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
let queryimgReset = document.querySelector("#resetid");
queryimgReset.addEventListener("click", (event) => {
    imgResetEvent(event);
});

function imgResetEvent(event){
    queryimgRemove.style.display = "block";
    queryimgHidden.style.visibility = "visible"; //보이기
}
//display : inline | block | none 
//숨겨지면 자리가 업어짐, 뒤에 것이 앞으로 와서 채움
