const input = document.getElementById("input");
const addBtn = document.getElementById("add");
const deleteBtn = document.getElementById("delete");
const ul = document.getElementById("ul");
const liItem = document.getElementById("li");

// ADDS NEW LIST ITEM
let addDiv = (item) => {
  if (input.value.length > 0) {
    let createDiv = document.createElement("div");
    createDiv.classList.add("span", "d-flex");
    createDiv.innerHTML = `<li class="list-group-item custom" id="li">${item}</li>
    <button class="btn btn-danger margin-css" id="delete">X</button>     
</div>`
    ul.appendChild(createDiv);
  }
    input.value = "";
};
 
//TOGGLE LIST DONE AND DELETE ITEMS
let done = (event) => {
  if(event.target.nodeName === "LI") {
    event.target.classList.toggle("done");
  } else if (event.target.nodeName === "BUTTON") {
    event.target.parentNode.remove();
  }  
}

//ADD LIST ITEM ON PRESSING ENTER
let addListAfterKeypress = (event) => {
  if (event.keyCode === 13) {
    addDiv(input.value);
  }
}

addBtn.addEventListener("click", function() {
  addDiv(input.value);
});
ul.addEventListener("click",done);
input.addEventListener("keypress", addListAfterKeypress);