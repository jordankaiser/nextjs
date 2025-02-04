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
              <label htmlFor={`item-${index}`}>{todo}</label>
              <input
                id={`item-${index}`}
                type="checkbox"
                onChange={(e) => {
                  // When the checkbox is checked remove the corresponding todo
                  if (e.target.checked) {
                    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
                  }
                }}
              />
            </li>
          ))}
        </ul>
      );
    }
  }

  const AddTodo = () => {
    const handleSubmit = (event) => {
      event.preventDefault();
      const newTodo = event.target[0].value;
      setTodos([...todos, newTodo]);
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