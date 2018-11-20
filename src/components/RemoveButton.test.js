import React from 'react';
import RemoveButton from "./RemoveButton";
import { shallow } from "enzyme";

describe('<RemoveButton />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<RemoveButton />);
    expect(wrapper.getElement()).toMatchInlineSnapshot(`
<button
  className="btn-remove"
  onClick={[Function]}
/>
`);
  });

  it('calls remove function on click', () => {
    const remove = jest.fn();
    const wrapper = shallow(<RemoveButton remove={remove} id={0}/>);
    wrapper.find('button').simulate('click');
    expect(remove).toHaveBeenCalledTimes(1);
    expect(remove).toHaveBeenCalledWith(0);
  });
});
