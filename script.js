'use strict'
const inputBox = document.querySelector(".input-box"); 
const listContainer = document.querySelector(".list-container"); 

function addTask() {
  if (inputBox.value == "") {
    // user must recieve an alert if there is no input
    alert("you must enter a task"); 
  }

  else {
    // creating a new list row
    let li = document.createElement("li"); 
    // the value of it should be initialised to the input value
    li.innerHTML = inputBox.value; 
    // this li will be displayed below listContainer 
    listContainer.appendChild(li);
    let span = document.createElement("span"); 
    //cross icon
    span.innerHTML = "\u00d7"; 
    li.appendChild(span); 

  }
  inputBox.value = ""; 
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked"); 
  }

  else if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove(); 
  }
}, false); 