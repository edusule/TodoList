export class TodoList {
    constructor() {
        this.cargarLocalStorage()
    }

    nuevoTodo(todo) {
        this.todos.push(todo)
        this.guardarLocalStorage()
    }

    eliminarTodo(id) {
        this.todos = this.todos.filter(todo => todo.id != id)
        this.guardarLocalStorage()

    }

    marcarCompletado(id) {
        this.todos.forEach(element => {
            if (element.id == id) {
                element.completado = !element.completado
                this.guardarLocalStorage()
            }
        });
    }

    eliminarCompletados() {
        this.todos = this.todos.filter(todo => !todo.completado)
        this.guardarLocalStorage()

    }
    guardarLocalStorage() {
        localStorage.setItem('todo', JSON.stringify(this.todos))

    }
    cargarLocalStorage() {

        if (localStorage.getItem('todo')) {
            this.todos = JSON.parse(localStorage.getItem('todo'))
        } else {
            this.todos = []
        }

    }

}