// 글자 입력 후 Add or Enter + 입력 없을 시 alter window "Please enter a task"
let item = document.querySelector("#items");
let inputtext = document.querySelector("#input_text");
let Addbutton = document.querySelector("#addBtn");

Addbutton.addEventListener("click",(event) => {
    additem(event);
});

inputtext.addEventListener("keydown",(event) => {
    if(event.key == "Enter"){
        additem(event);
    }
});

function additem(event){
    if(inputtext.value != "") {
        let newTodoList = `<li>
        <div class ="todoList">
        <div class="todoContent">${inputtext.value}</div>
        <div class="button">
        <div class="favorite_border">
            <i class="material-icons">favorite</i>
        </div>
        <div class="delete">
            <i class="material-icons">delete</i>
        </div>
        </div>
        </div>
        </li>`;
    
    item.insertAdjacentHTML("beforeend",newTodoList);
    inputtext.value ="";
    } else {
        alert("Please enter a task");
    }
}
// item 좋아요

item.addEventListener("click", (event) => {
    if(event.target.innerHTML == "favorite") {
        event.target.innerHTML = "favorite_border";
    }else if (event.target.innerHTML == "favorite_border")
        event.target.innerHTML = "favorite";
});

//item 삭제
item.addEventListener("click", (event) => {
    if(event.target.innerHTML == "delete") {
        event.target.parentElement.parentElement.parentElement.parentElement.remove();
    }
});

