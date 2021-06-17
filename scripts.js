
// window.onload = () => {
//   let elems = document.getElementsByClassName('box');
//     Array.from(elems).forEach(v => v.addEventListener('checked', function(){
//       console.log("checked");
//       this.parentNode.classList.toggle('checked');
//     }));
// }

// const checkbox = document.getElementById('myCheckbox')

// checkbox.addEventListener('change', (event) => {
//   if (event.currentTarget.checked) {
//     alert('checked');
//   } else {
//     alert('not checked');
//   }
// })

const getTodo = () => {
  toDoList = localStorage.getItem("toDoList")
  
  if (!toDoList) {
    toDoList = [];
  }
  
  else {
    toDoList = JSON.parse(toDoList);
  }
  
  let newTodo = document.getElementById("new-todo").value;
  console.log(newTodo);
  if (newTodo === "" || newTodo === null ) {
    return;
  }
  document.getElementById("new-todo").value = ''
  toDoList.push(newTodo)
  localStorage.setItem("toDoList", JSON.stringify(toDoList))
  displayNewTodo(newTodo);

}
const crossout = (id) => {
  console.log("Crossout ", id)
  let box = document.getElementById(id);
  console.log(box)
  box.style = "text-decoration: line-through";
}

const displayNewTodo = (newToDoItem) => {
  toDoList = document.getElementById("list");
  let newItem = document.createElement("input");
  newItem.type = "checkbox";
  newItem.value = newToDoItem;
  newItem.id = newToDoItem
  newItem.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    crossout(newToDoItem);
  }})

  newItem.classList.add("box")
  let newLabel = document.createElement('label');
  newLabel.for = "newToDoItem"
  newLabel.innerHTML = newToDoItem;
  toDoList.appendChild(newItem);
  toDoList.appendChild(newLabel);
  toDoList.appendChild(document.createElement('br'))
}


  