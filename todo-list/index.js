const input = document.getElementById('todo-input');
const btnAdd = document.getElementById('btn-todo');
const form = document.getElementById('todo-form');
const todoList = document.getElementById('todo-list');

// On First Load
let todos = []

if (localStorage.getItem('todos')) {
    todos = JSON.parse(localStorage.getItem('todos'));

    todos.forEach(item => {
        console.log(item)
        todoList.appendChild(createTask(item));
    });
}

form.addEventListener('submit', (e) => {

    e.preventDefault();
    const id = Math.random() * 512345;
    todos.push({ id, task: input.value, isCompleted: false });
    localStorage.setItem('todos', JSON.stringify(todos));
    todoList.appendChild(createTask({ id, task: input.value, isCompleted: false }));

    input.value = '';
    input.focus();
});


// Create the Task
function createTask(todo) {

    const liElement = document.createElement('li');
    const h6 = document.createElement('h6');
    const div = document.createElement('div');
    const checkbox = document.createElement('input');
    const span = document.createElement('span');

    liElement.classList.add('d-flex', 'justify-content-between', 'gap-5', 'align-items-center', 'mt-2');
    h6.textContent = todo.task;

    // Checkbox
    checkbox.type = 'checkbox';
    checkbox.checked = todo.isCompleted;
    checkbox.addEventListener('change', () => markAsCompleted(todo));
    checkbox.classList.add('mx-1');

    // Delete Button
    span.textContent = 'Delete';
    span.classList.add('btn-delete')
    span.addEventListener('click', () => {

        const confirmed = confirm(`Are you sure you want to delete this task? \n${todo.task}`);

        if (confirmed) {
            deleteTask(todo);
        }
    })
    // Append the checkbox and span to the div.
    div.appendChild(checkbox);
    div.appendChild(span);

    // Append the h6 and div to the list element.
    liElement.appendChild(h6);
    liElement.appendChild(div);

    liElement.style.borderLeft = todo.isCompleted ? '8px solid green' : 'none';

    return liElement;
}

function markAsCompleted(todo) {

    let todos = JSON.parse(localStorage.getItem('todos'));

    todos = todos.map(item => {

        if (item.id === todo.id) {
            return { ...item, isCompleted: !item.isCompleted }
        }
        return item;
    })

    localStorage.setItem('todos', JSON.stringify(todos));
    renderListOfTasks();
}

function deleteTask(todo) {

    let todos = JSON.parse(localStorage.getItem('todos'));

    todos = todos.filter(item => item.id !== todo.id);

    localStorage.setItem('todos', JSON.stringify(todos));
    renderListOfTasks();
}

function renderListOfTasks() {

    while (todoList.firstChild)
        todoList.removeChild(todoList.firstChild);

    let todos = JSON.parse(localStorage.getItem('todos'));

    todos.forEach(item => {
        todoList.appendChild(createTask(item));
    });
}