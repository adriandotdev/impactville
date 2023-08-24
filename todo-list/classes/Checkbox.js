export default class Checkbox {

    constructor(todo, markAsCompleted) {

        this.todo = todo;
        this.markAsCompleted = markAsCompleted;
    }

    create() {
        const checkbox = document.createElement('input');

        checkbox.type = 'checkbox';
        checkbox.checked = this.todo.isCompleted;
        checkbox.addEventListener('change', this.markAsCompleted);
        checkbox.classList.add('mx-1');

        return checkbox;
    }
}