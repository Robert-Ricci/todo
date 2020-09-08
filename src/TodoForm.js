import React, { Component } from "react";

export default class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      deadline: "",
      completed: false
    };
  }
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={e => this.handleChange(e)}
          />
        </form>
      </div>
    );
  }
}
