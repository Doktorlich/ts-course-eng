interface Todo {
    id: number;
    text: string;
}

const TODOS: Todo[] = [];

export function addTodo(text: string) {
    const newTodo = { id: Math.random(), text };
    TODOS.push(newTodo);
    return newTodo;
}

export function getTodo(id: number) {
    return TODOS.find(todo => todo.id === id);
}

export function deleteTodo(id: number) {
    return TODOS.filter(todo => todo.id !== id);
}

export function updateTodo(id: number, text: string) {
    const todo = TODOS.find(t => t.id === id);
    if (!todo) {
        console.log("Todo not found");
        return;
    }
    todo.text = text;
}

export function getTodos() {
    return TODOS;
}
