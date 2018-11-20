import React from "react";
import ToDoList from "./ToDoList";
import { shallow } from "enzyme";

describe("<ToDoList />", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<ToDoList />);
    expect(wrapper.getElement()).toMatchInlineSnapshot(`
<div
  className="center"
>
  <ul />
</div>
`);
  });
});
