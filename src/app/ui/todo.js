import { useState } from 'react';

export default function todo() {
  const [todos, setTodos] = useState(['Buy milk', 'Walk the dog', 'Do laundry']);

  const TodoItems = () => {
    if (todos.length === 0) {
      return <p>Nothing to do!</p>;
    } else {
      return (
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <input
                id={`item-${index}`}
                type="checkbox"
              />
              <label htmlFor={`item-${index}`}>{todo}</label>
              <button>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
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

  return (
    <>
      <TodoItems />
      <AddTodo />
    </>
  )
}