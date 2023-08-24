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

    markAsCompleted(todo) {

        let todos = JSON.parse(localStorage.getItem('todos'));

        todos = todos.map(item => {

            if (item.id === todo.id) {

                return { ...item, isCompleted: !todo.isCompleted }
            }
            return item;
        })

        localStorage.setItem('todos', JSON.stringify(todos));
    }

    deleteTodo(todo) {
        let todos = JSON.parse(localStorage.getItem('todos'));

        todos = todos.filter(item => item.id !== todo.id);

        localStorage.setItem('todos', JSON.stringify(todos));
    }
}