function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = taskInput.value;
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Удалить';
    deleteButton.className = 'delete';
    deleteButton.onclick = function() {
        taskList.removeChild(li);
    };
    
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    taskInput.value = '';
}

function filterTasks() {
    const filterInput = document.getElementById('filterInput').value.toLowerCase();
    const taskList = document.getElementById('taskList');
    const tasks = taskList.getElementsByTagName('li');

    for (let i = 0; i < tasks.length; i++) {
        const taskText = tasks[i].textContent.toLowerCase();
        tasks[i].style.display = taskText.includes(filterInput) ? '' : 'none';
    }
}