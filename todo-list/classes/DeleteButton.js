export default class DeleteButton {

    constructor(todo, deleteTask) {

        this.todo = todo;
        this.deleteTask = deleteTask;
    }

    create() {
        const span = document.createElement('span');

        // Delete Button
        span.textContent = 'Delete';
        span.classList.add('btn-delete')
        span.addEventListener('click', this.deleteTask);

        return span;
    }
}