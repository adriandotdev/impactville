export default class Title {

    constructor(todo) {

        this.todo = todo;
    }

    create() {
        const h6 = document.createElement('h6');
        h6.textContent = this.todo.task;

        return h6;
    }
}