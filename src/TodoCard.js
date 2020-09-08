import React from "react";

const TodoCard = ({ todo }) => {
  return (
    <div>
      <h1>{todo.title}</h1>
      <p>{todo.content}</p>
      <p>{todo.deadline}</p>
    </div>
  );
};

export default TodoCard;
