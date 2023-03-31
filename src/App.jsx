import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import CreateTodo from "./components/CreateTodo";
import Navigation from "./components/Navigation";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(localTodos);
  }, []);
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route
          exact
          path="/incomplete"
          element={
            <div className="incomplete container route">
              <h1>Create new Todo</h1>
              <CreateTodo setTodos={setTodos} />
              <TodoList todos={todos} setTodos={setTodos} />
            </div>
          }
        />
        <Route
          exact
          path="/complete"
          element={
            <div className="complete container route">
              <TodoList todos={todos} setTodos={setTodos} complete />
            </div>
          }
        />
        <Route path="*" element={<Navigate to="/incomplete" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
