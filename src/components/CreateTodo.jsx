import "./CreateTodo.css";

const CreateTodo = ({ setTodos }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!e.target[0].value) return;
    const todo = e.target[0].value;
    setTodos((prevTodos) => {
      return [
        {
          id: prevTodos.length,
          text: todo,
          completed: false,
        },
        ...prevTodos,
      ];
    });
    // add the todo in the local storage
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos = [
      {
        id: todos.length,
        text: todo,
        completed: false,
      },
      ...todos,
    ];
    localStorage.setItem("todos", JSON.stringify(todos));
    const form = e.target;
    form.reset();
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Create a Todo" />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default CreateTodo;
