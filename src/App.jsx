import { useEffect, useState } from "react";
import "./styles.css";
import NewTodoForm from "./NewTodoform";
import TodoList from "./Todolist";
function App() {
  const [todos, setTodos] = useState(()=>{
    const localValue = localStorage.getItem("ITEMS")
if (localValue == null) return []

return JSON.parse(localValue)
  });






  useEffect(()=>{
    localStorage.setItem("ITEMS",JSON.stringify(todos))
  },[todos])

  const addTodo = (title) => {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title,
          completed: false,
        },
      ];
    });
  };

  const toggleTodo = (id, completed) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };

  const handleDelete = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };
console.log(todos);
  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default App;