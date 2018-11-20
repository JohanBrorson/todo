import React from 'react';
import './ToDoItem.css';
import RemoveButton from './RemoveButton';

export default class ToDoItem extends React.Component {

  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    this.props.toggle(this.props.id);
  }

  shouldComponentUpdate(nextProps) {
    return this.props !== nextProps;
  }

  render() {
    var inputId = "input-".concat(this.props.id);

    return (
      <li>
        <div className='item'>
          <input
            id={inputId}
            type='checkbox'
            checked={this.props.todoItem.completed}
            onChange={this.onChange}
          />
          <label>{this.props.todoItem.title}</label>
          <RemoveButton remove={this.props.remove} id={this.props.id}/>
        </div>
      </li>
    );
  }
}
