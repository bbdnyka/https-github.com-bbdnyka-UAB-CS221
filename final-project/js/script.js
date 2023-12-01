document.addEventListener('DOMContentLoaded', function () {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  const addTaskBtn = document.getElementById('addTaskBtn');

  // Load task from local storage
  loadTasks();

  addTaskBtn.addEventListener('click', function () {
    // Get value from input field
    const newTask = taskInput.value.trim();

    // Check if the input is not empty
    if (newTask !== '') {
      // Create a new list item
      const li = document.createElement('li');
      li.textContent = newTask;

      // Append the new task to the list
      taskList.appendChild(li);

      // Save updated list to local storage
      saveTask();

      // Clear input field
      taskInput.value = '';
    }
  });
  function saveTask() {
    // get the current task list
    const tasks = Array.from(taskList.children).map((li) => li.textContent);

    // Save tasks items to local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  function loadTasks() {
    // Retrieve tasks from local storage
    const storedTasks = localStorage.getItem('tasks');

    // Check if there is stored data
    if (storedTasks) {
      const tasks = JSON.parse(storedTasks);
      tasks.forEach((element) => {
        const taskItem = document.createElement('li');
        taskItem.textContent = element;
        taskList.appendChild(taskItem);
      });
    }
  }
});
