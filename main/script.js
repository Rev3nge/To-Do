document.addEventListener('DOMContentLoaded', loadTasks);

    function addTask() {
        const taskInput = document.getElementById('taskInput');
        const taskList = document.getElementById('taskList');
        
        if (taskInput.value) {
            const li = document.createElement('li');
            li.textContent = taskInput.value;

            li.onclick = function() {
                li.classList.toggle('completed');
                saveTasks();
            };
            
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Удалить';
            deleteButton.className = 'delete';
            deleteButton.onclick = function() {
                taskList.removeChild(li);
                saveTasks();
            };

            li.appendChild(deleteButton);
            taskList.appendChild(li);
            taskInput.value = '';
            saveTasks();
        }
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

    function saveTasks() {
        const taskList = document.getElementById('taskList');
        const tasks = [];
        for (let i = 0; i < taskList.children.length; i++) {
            const taskText = taskList.children[i].childNodes[0].textContent;
            const isCompleted = taskList.children[i].classList.contains('completed');
            tasks.push({ text: taskText, completed: isCompleted });
        }
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const taskList = document.getElementById('taskList');
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task.text;
            if (task.completed) {
                li.classList.add('completed');
            }
            li.onclick = function() {
                li.classList.toggle('completed');
                saveTasks();
            };

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Удалить';
            deleteButton.className = 'delete';
            deleteButton.onclick = function() {
                taskList.removeChild(li);
                saveTasks();
            };
            
            li.appendChild(deleteButton);
            taskList.appendChild(li);
        });
    }