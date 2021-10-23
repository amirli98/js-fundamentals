// UI vars

const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");

const items = ["item1", "item2", "item3"];

eventListeners();

function eventListeners() {
  form.addEventListener("submit", addNewItem);

  // delete an item
  taskList.addEventListener("click", deleteItem);

  btnDeleteAll.addEventListener("click", deleteAllItems);
}

function addNewItem(e) {
  if (input.value === "") {
    alert("Add new item!");
  } else {
    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-secondary";
    li.appendChild(document.createTextNode(input.value));
    const a = document.createElement("a");
    a.classList = "delete-item float-right";
    a.setAttribute("href", "#");
    a.innerHTML = '<i class="fas fa-times"></i>';
    li.appendChild(a);
    taskList.appendChild(li);
    input.value = "";
    e.preventDefault();
  }
}

function deleteItem(e) {
  if (e.target.className === "fas fa-times") {
    e.target.parentElement.parentElement.remove();
  }

  e.preventDefault();
}

function deleteAllItems(e) {
  //taskList.innerHTML = "";

  if (confirm("Are you sure?")) {
    taskList.childNodes.forEach(function (item) {
      if (item.nodeType === 1) {
        item.remove();
      }
    });
  }
  e.preventDefault();
}
