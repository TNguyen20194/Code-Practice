import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todo Items"}
      {todos.map((todo) => {
        return (
          <TodoItem
          key={todo.id}
          {...todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
