import React from 'react';
import './RemoveButton.css';

export default class RemoveButton extends React.PureComponent {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.remove(this.props.id);
  }

  render() {
    return (
      <button
        className='btn-remove'
        onClick={this.handleClick}
      />
    );
  }
}
