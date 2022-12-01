// ADDING TO-DOS
let toDos = [];

// Assigning ul to a variable
const toDoList = document.querySelector("#to-do-list");

// when the user submits the form, call the addToDo() function

const form = document.querySelector("#to-do-form");
form.addEventListener("submit", addToDo);

const toDoInput = document.querySelector("#to-do-input");

function addToDo(event) {
  // Preventing default HTML on a form from happening. The page won't refresh.
  event.preventDefault();
  
  let toDo = toDoInput.value;
  // Checks if user has typed anything in input element
  if (toDo) {
    // Adds input value to the to-dos array
    toDos.push(toDo);
    // Renders new to-do in the #to-do-list ul
    renderToDos();
  }
  
  // Clears value from input element
  toDoInput.value = "";
}

function renderToDos() {
  // Clear ul element before rendering. Prevents double rendering.
  toDoList.innerHTML = "";
  
  // For each element in array, renders that toDo
  for (let i = 0; i < toDos.length; i++) {
    renderToDo(toDos[i]);
  }
  
  document.querySelector("#to-do-count").innerText = toDos.length;
}

function renderToDo(toDo) {
  let li = document.createElement("li");
  li.classList.add("to-do-item");
  li.innerText = toDo;
  toDoList.appendChild(li);
  
  li.addEventListener("click", function(){
    completeToDo(toDo);
  })
}

// COMPLETING TO-DOS

let completedToDos = [];
const completedToDoList = document.querySelector("#completed-list");

// When user clicks to-do li element, the function is called
function completeToDo(toDo) {
  
  // Adds completed to-do to completed array
  completedToDos.push(toDo);
  
  //Removes completed-todo from from to-dos array
  toDos = toDos.filter(t => t !== toDo);
  
  // Re-renders to-dos and completed to-dos list
  renderToDos();
  renderCompletedToDos();
}

// Rendering to-dos without click event
function renderCompletedToDos() {
  completedToDoList.innerHTML = "";
  
  for (completedToDo of completedToDos) {
    renderCompleted(completedToDo);
  }
  
  document.querySelector("#completed-to-do-count").innerText = completedToDos.length;
}

function renderCompleted(completed) {
  let li = document.createElement("li");
  li.classList.add("done-item");
  li.innerText = completed;
  completedToDoList.appendChild(li);
}
