import { Router } from "express";
import { addTodo, deleteTodo, getTodo, getTodos, updateTodo } from "../controllers/data.js";

const router = Router();

router.post("/add-todo", (req, res) => {
    const text = req.body.text;
    const addedTodo = addTodo(text);
    res.json({ message: "Todo added!", todo: addedTodo });
});

router.get("/todos", (req, res) => {
    const todos = getTodos();
    res.json({ messages: "Load todos", todos: todos });
});

router.get("/todos/:id", (req, res) => {
    const todoId = +req.params.id;
    const todo = getTodo(todoId);
    res.json({ messages: "Load todos", todo: todo });
});

router.delete("/delete/:id", (req, res) => {
    const todoId = +req.params.id;
    const todos = deleteTodo(todoId);
    res.json({ message: `Todo delete successfully`, todos });
});

router.put("/update/:id", (req, res) => {
    const todoId = +req.params.id;
    const text = req.body.text;
    updateTodo(todoId, text);
    const todos = getTodos();
    res.json({ message: `Todo updated successfully`, todos });
});

export default router;
