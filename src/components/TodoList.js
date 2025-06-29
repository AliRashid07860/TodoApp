import TodoItem from "./TodoItem";

const TodoList=()=>{

    const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

    return(
        <h1>TodoList</h1>
            <ul>
        {todos.map((todo) => (
          <TodoItem
              key={todo.id}
              todo={todo}
              onToggleComplete={handleToggleComplete}
              onDelete={handleDeleteTodo}
            />
        ))}
      </ul>
    )
}
export default TodoList;