
// Create a task Array
let listtasks = [];
let task = document.getElementById("task").value;
listtasks.push(task);
  
function addTask() {
  let html = "";

  for (let i = 0; i < listtasks.length; i++) {
    html += "<li>" + listtasks[i] +
    " <button onclick='removeTask(" + i + ")'>x</button></li>";
  }
  document.getElementById("list").innerHTML = html;
  document.appendChild(html)
}

function removeTask(i) {
  listtasks.splice(i, 1);
  addTask();
}