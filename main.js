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

newItem.addEventListener("keypress", function(e){
    if(e.key === "Enter")
    {

   
    let list = document.createElement("li");
    list.innerText = newItem.value;
    listItems.appendChild(list);
    list.classList.add("list-styling");
    newItem.value = "";
}
})
