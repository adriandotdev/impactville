export default class TodoManager {

    addTodo(task) {
        const id = Math.random() * 512345;

        if (localStorage.getItem('todos')) {
            let todos = JSON.parse(localStorage.getItem('todos'));
            todos.push({ id, task, isCompleted: false })
            localStorage.setItem('todos', JSON.stringify(todos));
        }
        else {
            let todos = [];
            todos.push({ id, task, isCompleted: false });
            localStorage.setItem('todos', JSON.stringify(todos));
        }
    }
}