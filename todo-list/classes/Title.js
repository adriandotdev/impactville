export default class Title {

    constructor(todo) {

        this.todo = todo;
    }

    create() {
        const h6 = document.createElement('h6');
        h6.textContent = this.todo.task;
        h6.style.color = this.todo.isCompleted ? 'green' : 'black';
        return h6;
    }
}