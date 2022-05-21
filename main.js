 








let addButton = document.getElementById("add-button");
let listItems = document.getElementById("list-items");
let newItem = document.getElementById("new-item");

addButton.addEventListener("click", function(){
    let list = document.createElement("li");
    list.innerText = newItem.value;
    listItems.appendChild(list);
    list.classList.add("list-styling");
    newItem.value = "";
    list.addEventListener("click", function(){
        list.style.textDecoration = "line-through";
    })
    list.addEventListener("dblclick", function(){
        listItems.removeChild(list);
    })
})










// let newItem = document.getElementById("new-item");


// function addToList(){
//     newItem = document.getElementById("new-item").value;
//     document.getElementById("list-items").innerHTML = newItem;
// }

// function appendToList(){
//     let li = document.createElement("li");
//     li.innerText = newItem
// }