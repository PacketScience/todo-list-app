const inputTask = document.querySelector(".inputTask");
const addTaskBtn = document.querySelector(".addTodoBtn");
const allList = document.querySelector(".allList");
const taskLists = [];

const addTasks = (taskName) => {
  taskLists.push(taskName);
  const newTask = document.createElement("div");
  newTask.classList.add("addedList");
  newTask.innerHTML = `
    <input type="checkbox" class="checkTask" />
    <p class="taskName">${taskName}</p>
    <button class="deleteBtn">Delete</button>
  `;
  allList.appendChild(newTask);
};

addTaskBtn.addEventListener("click", function () {
  const taskNow = inputTask.value;
  addTasks(taskNow);
  console.log("Add Task");
  inputTask.value = ""; // Clear input field
});

// Event delegation for dynamic elements
allList.addEventListener("click", function (event) {
  const target = event.target;
  if (target.classList.contains("deleteBtn")) {
    // Handle delete button click
    const parentTask = target.closest(".addedList");
    parentTask.remove();
    console.log("Delete Task");
  } else if (target.classList.contains("checkTask")) {
    // Handle checkbox change
    const parentTask = target.closest(".addedList");
    if (target.checked) {
      parentTask.classList.add("doneList");
      target.nextElementSibling.classList.add("taskDone");
      target.nextElementSibling.nextElementSibling.classList.add("doneButton");
      console.log("Checked Task");
    } else {
      parentTask.classList.remove("doneList");
      target.nextElementSibling.classList.remove("taskDone");
      target.nextElementSibling.nextElementSibling.classList.remove(
        "doneButton"
      );
      console.log("Unchecked Task");
    }
  }
});
function handleAddTask() {
  const taskNow = inputTask.value.trim(); // Remove leading/trailing spaces
  if (taskNow !== "") {
    addTasks(taskNow);
    inputTask.value = ""; // Clear input field
    console.log("Add Task");
  }
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    handleAddTask();
  }
}

addTaskBtn.addEventListener("click", handleAddTask);

inputTask.addEventListener("keydown", handleKeyPress);
