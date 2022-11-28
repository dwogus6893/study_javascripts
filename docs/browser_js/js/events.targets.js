let querySingle = document.querySelector("#single");
querySingle.addEventListener("click", (event)=>{
    singleEvent(event);
});


//querySingle.addEventListener("double-click", singleEvent);

function singleEvent() {
    console.log(event);
    querySingle.innerHTML = "Take One Event!";
}