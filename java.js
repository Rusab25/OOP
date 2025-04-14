function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task");
        return;
    }
}

const taskList = document.getElementById("taskList");
const li = document.getElementById("li");

li.textContent = taskTest;
li.onclick = function() {
    li.classList.toggle("completed");
};

taskList.appendChild(li);
taskInput.value = "";