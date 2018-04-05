import React from 'react';
import './ToDoItem.css';

export default class ToDoItem extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      index: props.id,
      completed: props.todoItem.completed,
      title: props.todoItem.title,
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    var currentCompletedState = this.state.completed;
    this.props.toggle(this.state.index);
    this.setState({
      completed: !currentCompletedState
    });
  }

  render() {
    var inputId = "input-".concat(this.state.index);

    return (
      <li>
        <div>
          <input
            id={inputId}
            type="checkbox"
            checked={this.state.completed}
            onChange={this.onChange}
          />
          <label>{this.state.title}</label>
        </div>
      </li>
    );
  }
}
