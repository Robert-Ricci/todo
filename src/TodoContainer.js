import React, { Component } from "react";
import TodoIndex from "./TodoIndex";
const todos = [
  {
    id: 1,
    title: "Example todo",
    completed: false,
    content: "Example text",
    deadline: "09/08/2020"
  }
];
export default class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    this.setState({
      todos
    });
  }
  render() {
    return (
      <div>
        <TodoIndex todos={this.state.todos} />
      </div>
    );
  }
}
