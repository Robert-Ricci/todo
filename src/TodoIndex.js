import React from "react";
import TodoCard from "./TodoCard";

const TodoIndex = ({ todos }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoCard key={index} todo={todo} />
      ))}
    </div>
  );
};

export default TodoIndex;
