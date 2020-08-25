import { saludar, crearTodoHtml } from './js/componentes.js';
import './styles.css';
import { Todo, TodoList } from './classes'

export const todoList = new TodoList()

todoList.todos.forEach(element => {
    crearTodoHtml(element)
});