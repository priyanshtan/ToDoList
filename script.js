let taskArray = [];

function AddTask() {
  const tasks = document.getElementById("task").value.trim();
  if (tasks === "") return;

  const payload = { taskName: tasks };
  taskArray.push(payload);

  allTaskList(taskArray);
  document.getElementById("task").value = "";
}

function allTaskList(data) {
  let statement = "";
  data.forEach((val, index) => {
    statement += `<tr>
      <td>${index + 1}</td>
      <td>${val.taskName}</td>
      <td><button class="delete-btn" onclick="DeleteTask(${index})">Delete</button></td>
    </tr>`;
  });
  document.getElementById("demo").innerHTML = statement;
}

function DeleteTask(taskID) {
  taskArray.splice(taskID, 1);
  allTaskList(taskArray);
}
