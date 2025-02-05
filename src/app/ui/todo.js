import { useState, useRef } from 'react';

export default function todo() {
  const [todos, setTodos] = useState(['Buy milk', 'Walk the dog', 'Do laundry']);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');
  const editInputRef = useRef(null);

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditValue(todos[index]);
  };

  const handleSave = (index) => {
    const updatedTodos = todos.map((todo, i) => i === index ? editValue : todo);
    setTodos(updatedTodos);
    setEditIndex(null);
    setEditValue('');
  };

  // Helper that returns the markup for an editing todo item
  const renderEditMode = (index) => (
    <>
      <input
        ref={editInputRef}
        type="text"
        value={editValue}
        autoFocus
        onChange={(e) => setEditValue(e.target.value)}
      />
      <button onClick={() => handleSave(index)}>Save</button>
    </>
  );

  // Helper that returns the markup for a non-editing todo item
  const renderViewMode = (todo, index) => (
    <>
      <label htmlFor={`item-${index}`}>{todo}</label>
      <button onClick={() => handleEdit(index)}>Edit</button>
      <button onClick={() => handleDelete(index)}>Delete</button>
    </>
  );

  const TodoItems = () => {
    if (todos.length === 0) {
      return <p>Nothing to do!</p>;
    } else {
      return (
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
            <input id={`item-${index}`} type="checkbox" />
            {editIndex === index ? renderEditMode(index) : renderViewMode(todo, index)}
          </li>
          ))}
        </ul>
      );
    }
  }

  const handleDelete = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  }

  const handleAddTask = (newTodo) => {
    setTodos([...todos, newTodo]);
  }

  const AddTodo = () => {
    const handleSubmit = (event) => {
      event.preventDefault();
      handleAddTask(event.target[0].value);
    }

    return (
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Add</button>
      </form>
    )
  }

  const ChangeTodo = () => {
    const handleSubmit = (event) => {
      event.preventDefault();
      const value = event.target[0].value;

      // Remove first item from todos.
      const newTodos = todos.slice(1);

      // Add value to beginning of newTodos.
      newTodos.unshift(value);

      setTodos(newTodos);
    }
    
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">change</button>
      </form>
    )
  }

  return (
    <>
      <TodoItems />
      <AddTodo />
      <ChangeTodo />
    </>
  )
}