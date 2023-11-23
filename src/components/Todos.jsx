import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import deleteItemByItsId from "../fetchHandl";
import { handleFetch } from "../fetchHandl";

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
    try {
      handleFetch(`/todos?userId=${user.id}`, "GET", undefined).then((data) => {
        // console.log("data: ", data);
        setTodos(data);
      });
    } catch (error) {
      console.error("Error fetching album data:", error);
    }
  }, []);
  //   console.log(newTodo);
  const handleCheckboxChange = async (todoId) => {
    // Find the todo with the given id
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(updatedTodos);

    try {
      handleFetch(`/todos/${todoId}`, "PATCH", {
        completed: !todos.find((todo) => todo.id === todoId).completed,
      }).then((data) => {
        console.log("data: ", data);
      });
    } catch (error) {
      console.error("Error fetching album data:", error);
    }
  };

  if (todos === null) {
    return <p>louding...</p>;
  }
  const addTask = async () => {
    setTodos((prev) => [...prev, newTodo]);

    try {
      handleFetch(`/todos`, "POST", newTodo).then((data) => {
        console.log("data: ", data);
      });
    } catch (error) {
      console.error("Error fetching album data:", error);
    }

    setNewTodo({ ...emptyToDo });
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
          <button
            onClick={() => {
              console.log("hloo");
              deleteItemByItsId("todos", todo.id, setTodos);
            }}
          >
            delet
          </button>
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
