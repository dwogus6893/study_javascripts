let queryKeydown = document.querySelector("#keydown")
queryKeydown.addEventListener("keydown", (event) => {
    console.log(event);
    if(event.code == "Enter"){
        keydownDesc(queryKeydown.value);        
    } //alt + shift 방향키 => 복사
    console.log(event.target);
});

function keydownDesc (desc) {
    let qureyKeydownDesc = document.querySelector("#keydownDesc");
    queryKeydownDesc.innerHTML = desc;
}

let queryload = document.querySelector("#keydownDesc");
queryload.addEventListener("load", queryLoad());

function queryLoad(){
    queryload.innerHTML = "Done On Load!";
}