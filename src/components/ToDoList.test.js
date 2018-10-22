import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './ToDoList';
import { shallow } from 'enzyme'

describe('<ToDoList />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ToDoList />)
    expect(wrapper.getElement()).toMatchSnapshot();
  });
});
