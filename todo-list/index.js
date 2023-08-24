const input = document.getElementById('todo-input');
const btnAdd = document.getElementById('btn-todo');
const form = document.getElementById('todo-form');
const todoList = document.getElementById('todo-list');

import TodoManager from "./classes/TodoManager.js";

if (localStorage.getItem('todos')) {
    renderListOfTasks();
}

const todoManager = new TodoManager();

form.addEventListener('submit', (e) => {

    e.preventDefault();

    // const id = Math.random() * 512345;

    // if (localStorage.getItem('todos')) {
    //     let todos = JSON.parse(localStorage.getItem('todos'));
    //     todos.push({ id, task: input.value, isCompleted: false })
    //     localStorage.setItem('todos', JSON.stringify(todos));
    // }
    // else {
    //     let todos = [];
    //     todos.push({ id, task: input.value, isCompleted: false });
    //     localStorage.setItem('todos', JSON.stringify(todos));
    // }

    todoManager.addTodo(input.value);

    renderListOfTasks();
    input.value = '';
    input.focus();
});


// Create the Task
function createTask(todo) {

    const task = document.createElement('li');
    const buttonsContainer = document.createElement('div');

    task.classList.add('d-flex', 'justify-content-between', 'gap-5', 'align-items-center', 'mt-2');

    // Append the checkbox and span to the div.
    buttonsContainer.appendChild(createCheckbox(todo));
    buttonsContainer.appendChild(createDeleteButton(todo));

    task.appendChild(createTitle(todo));
    task.appendChild(buttonsContainer);
    task.style.borderLeft = todo.isCompleted ? '8px solid green' : '8px solid red';

    return task;
}

function createTitle(todo) {
    const h6 = document.createElement('h6');
    h6.textContent = todo.task;

    return h6;
}

function createCheckbox(todo) {
    const checkbox = document.createElement('input');

    checkbox.type = 'checkbox';
    checkbox.checked = todo.isCompleted;
    checkbox.addEventListener('change', () => markAsCompleted(todo));
    checkbox.classList.add('mx-1');

    return checkbox;
}

function createDeleteButton(todo) {
    const span = document.createElement('span');

    // Delete Button
    span.textContent = 'Delete';
    span.classList.add('btn-delete')
    span.addEventListener('click', () => {

        const confirmed = confirm(`Are you sure you want to delete this task? \n${todo.task}`);

        if (confirmed) {
            deleteTask(todo);
        }
    })

    return span;
}

// Mark the task as completed.
function markAsCompleted(todo) {

    let todos = JSON.parse(localStorage.getItem('todos'));

    todos = todos.map(item => {

        if (item.id === todo.id) {

            return { ...item, isCompleted: !todo.isCompleted }
        }
        return item;
    })

    localStorage.setItem('todos', JSON.stringify(todos));
    renderListOfTasks();
}

// Delete a task to the list.
function deleteTask(todo) {

    let todos = JSON.parse(localStorage.getItem('todos'));

    todos = todos.filter(item => item.id !== todo.id);

    localStorage.setItem('todos', JSON.stringify(todos));
    renderListOfTasks();
}

/** This will render the tasks from the localStorage. */
function renderListOfTasks() {

    while (todoList.firstChild)
        todoList.removeChild(todoList.firstChild);

    let todos = JSON.parse(localStorage.getItem('todos'));

    todos.forEach(item => {
        todoList.appendChild(createTask(item));
    });
}