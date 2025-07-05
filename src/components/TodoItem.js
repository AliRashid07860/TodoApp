import React, { useState } from 'react';

function TodoItem({ todo, onToggleComplete, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleSave = () => {
    if (editedText.trim() !== '') {
      onUpdate(todo.id, editedText);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  return (
    <li>
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={handleChange}
          onBlur={handleSave}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        <p
          onClick={handleEdit}
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
            cursor: 'pointer',
          }}
        >
          {todo.text}
        </p>
      )}

      <button onClick={() => onToggleComplete(todo.id)}>
        {todo.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
