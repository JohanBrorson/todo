import React from 'react';
import ToDoItem from './ToDoItem';
import './ToDoList.css';

export default class ToDoList extends React.PureComponent {

  render() {
    const {
      items,
    } = this.props;

    return (
      <div className="center">
        <ul>
          {
            items && items.map((item, index) => (
              <ToDoItem
                key={index}
                id={index}
                todoItem={item}
                toggle={this.props.toggle}
                remove={this.props.remove}>
              </ToDoItem>
          ))}
        </ul>
      </div>
    );
  }
}
