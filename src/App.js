import React, { Component } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      hasInput: false,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentWillMount() {
    let initialState = JSON.parse(localStorage.getItem('state'))  || [];
    console.log("Initial state: " + JSON.stringify(initialState));
    this.setState({items: initialState});
  }

  componentDidUpdate() {
    localStorage.state = JSON.stringify(this.state.items);
  }

  render() {
    return (
      <div>
        <h1>To Do</h1>
        <form onSubmit={this.onSubmit}>
          <button id="submit" disabled={!this.state.hasInput}>Submit</button>
          <div className="task-input-container">
            <input
              id="new-task-input"
              onChange={this.onChange}
              type="text" ref={(element) => { this.input = element }}/>
          </div>
        </form>
        <ToDoList items={this.state.items} toggle={this.toggleCompleted}/>
      </div>
    );
  }

  onChange = (event) => {
    this.setState({hasInput: event.target.value.length > 0});
  }

  onSubmit = (event) => {
    event.preventDefault();
    let item = {title: this.input.value, completed: false};
    console.log("Add task: " + item.title);
    this.setState({
      items: [...this.state.items, item],
      hasInput: false
    });
    this.input.value = '';
  }

  toggleCompleted = (index, event) => {
    console.log("Toggle completed for item: " + index)
    const items = this.state.items;
    items[index].completed = !items[index].completed;

    this.setState({
      items,
    });
  }

}
