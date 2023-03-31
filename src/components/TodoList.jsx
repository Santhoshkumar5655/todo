import "./TodoList.css";

const TodoList = ({ todos, setTodos, complete = false }) => {
  const deleteTodo = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };
  const doneTodo = (index) => {
    const newTodos = todos.map((todo, i) => {
      if (i === index) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };
  return (
    <ul className="todo-list">
      {todos &&
        todos.map((todo, index) =>
          complete && todo.completed ? (
            <li key={index} className={`${todo.completed && "strikethrough"}`}>
              <p className="text">{todo.text}</p>
              <div className="buttons">
                <button className="delete" onClick={() => deleteTodo(index)}>
                  Delete
                </button>
              </div>
            </li>
          ) : (
            !complete &&
            !todo.completed && (
              <li
                key={index}
                className={`${todo.completed && "strikethrough"}`}
              >
                <p className="text">{todo.text}</p>
                <div className="buttons">
                  <button className="done" onClick={() => doneTodo(index)}>
                    Done
                  </button>
                  <button className="delete" onClick={() => deleteTodo(index)}>
                    Delete
                  </button>
                </div>
              </li>
            )
          )
        )}
    </ul>
  );
};

export default TodoList;
