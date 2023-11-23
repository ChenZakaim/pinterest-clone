import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

function Todos() {
  const { user } = useContext(UserContext);
  const emptyToDo = {
    userId: user.id,
    title: "",
    completed: false,
  };
  const [todos, setTodos] = useState(null);
  const [newTodo, setNewTodo] = useState({ ...emptyToDo });
  useEffect(() => {
    const getTodos = async () => {
      const response = await fetch(
        `http://localhost:3000/todos?userId=${user.id}`
      );
      const data = await response.json();
      setTodos(data);
    };
    getTodos();
  }, []);
  console.log(newTodo);
  const handleCheckboxChange = async (todoId) => {
    // Find the todo with the given id
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(updatedTodos);

    try {
      await fetch(`http://localhost:3000/todos/${todoId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          completed: !todos.find((todo) => todo.id === todoId).completed,
        }),
      });
    } catch (error) {
      console.error("Error updating completed status:", error);
    }
  };

  if (todos === null) {
    return <p>louding...</p>;
  }
  const addTask = async () => {
    setTodos((prev) => [...prev, newTodo]);
    setNewTodo({ ...emptyToDo });
    try {
      await fetch(`http://localhost:3000/todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });
    } catch (error) {
      console.error("Error updating completed status:", error);
    }
  };

  return (
    <div>
      {todos.map((todo, key) => (
        <div key={key}>
          <input
            type="checkbox"
            id={`todo-${todo.id}`}
            checked={todo.completed}
            onChange={() => handleCheckboxChange(todo.id)}
          />
          <label htmlFor={`todo-${todo.id}`}>{todo.title}</label>
          <button>dellet</button>
        </div>
      ))}
      <input
        type="text"
        value={newTodo.title}
        onChange={(event) => {
          setNewTodo((prev) => ({ ...prev, title: event.target.value }));
        }}
      />
      <button onClick={() => addTask(newTodo)}>add</button>
    </div>
  );
}

export default Todos;
