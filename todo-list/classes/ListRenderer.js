
import Checkbox from '../classes/Checkbox.js';
import Title from '../classes/Title.js';
import DeleteButton from './DeleteButton.js'

export default class ListRenderer {

    constructor(todoManager, todoList) {

        this.todoManager = todoManager;
        this.todoList = todoList;
    }

    createTask(todo) {

        /** Components */
        const title = new Title(todo);

        const checkbox = new Checkbox(todo, () => {
            this.todoManager.markAsCompleted(todo);
            this.renderListOfTasks();
        });

        const deleteButton = new DeleteButton(todo, () => {

            const confirmed = confirm(`Are you sure you want to delete this task? \n${todo.task}`);

            if (confirmed) {
                this.todoManager.deleteTodo(todo);
                this.renderListOfTasks();
            }
        });

        const task = document.createElement('li');
        const buttonsContainer = document.createElement('div');

        task.classList.add('d-flex', 'justify-content-between', 'gap-5', 'align-items-center', 'mt-2');

        // Append the checkbox and span to the div.
        buttonsContainer.appendChild(checkbox.create());
        buttonsContainer.appendChild(deleteButton.create());

        task.appendChild(title.create());
        task.appendChild(buttonsContainer);
        task.style.borderLeft = todo.isCompleted ? '8px solid green' : '8px solid red';

        return task;
    }

    renderListOfTasks() {
        while (this.todoList.firstChild)
            this.todoList.removeChild(this.todoList.firstChild);

        let todos = JSON.parse(localStorage.getItem('todos'));

        todos.forEach(item => {
            this.todoList.appendChild(this.createTask(item));
        });
    }
}