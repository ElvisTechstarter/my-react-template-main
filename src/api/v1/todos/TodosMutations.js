import api from "../../config/api";

async function createTodo(newTodo) {
  const result = api.post("/todos/create", {
    newTodo: newTodo,
  });

  const todos = result.data;

  return todos;
}

async function markTodo(newTodo) {
  const result = api.put("/todos/mark", {
    newTodo: newTodo,
  });

  const todos = result.data;

  return todos;
}

async function updateTodo(newTodo) {
  const result = api.put("/todos/update", {
    newTodo: newTodo,
  });

  const todos = result.data;

  return todos;
}

async function deleteTodo(newTodo) {
  const result = api.delete("/todos/delete", {
    newTodo: newTodo,
  });

  const todos = result.data;

  return todos;
}

export default { createTodo, markTodo, updateTodo, deleteTodo };
