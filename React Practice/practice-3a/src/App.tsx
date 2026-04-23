import { useEffect, useState } from "react";
import "./style.css";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const localValue = localStorage.getItem("ITEMS");

    if (localValue === null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  console.log(todos);

  function addTodo(title: Todo["title"]) {
    setTodos((currentTodos) => {
      const newTodo: Todo = {
        id: crypto.randomUUID(),
        title: title,
        completed: false,
      };

      return [...currentTodos, newTodo];
    });
  }

  function toggleTodo(id: Todo["id"], completed: Todo["completed"]) {
    setTodos((currentTodo) => {
      return currentTodo.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed,
          };
        }

        return todo;
      });
    });
  }

  function deleteTodo(id: Todo["id"]) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList
      todos={todos}
      toggleTodo={toggleTodo}
      deleteTodo={deleteTodo}
       />
    </>
  );
}

export default App;
