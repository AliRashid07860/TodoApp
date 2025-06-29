import React from 'react';

function TodoItem({ todo, onToggleComplete, onDelete }) {
  return (
    <li >
        <p style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</p>
      
      <button onClick={() => onToggleComplete(todo.id)}>
        {todo.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;