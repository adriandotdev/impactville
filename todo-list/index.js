const input = document.getElementById('todo-input');
const form = document.getElementById('todo-form');
const todoList = document.getElementById('todo-list');

import TodoManager from "./classes/TodoManager.js";
import ListRenderer from "./classes/ListRenderer.js";

const todoManager = new TodoManager();
const listRenderer = new ListRenderer(todoManager, todoList);

if (localStorage.getItem('todos')) {
    listRenderer.renderListOfTasks();
}

form.addEventListener('submit', (e) => {

    e.preventDefault();

    todoManager.addTodo(input.value);

    listRenderer.renderListOfTasks();
    input.value = '';
    input.focus();
});
