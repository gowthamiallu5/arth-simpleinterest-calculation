import React from "react";
import { shallow } from "enzyme";
import SharedButton from "./index";
import { findbyattr } from "../../../Utils/index";

const setUp = (props = {}) => {
  const component = shallow(<SharedButton {...props} />);
  return component;
};

describe("button component ", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it("should render", () => {
    const wrapper = findbyattr(component, "buttonComponent");
    expect(wrapper.length).toBe(1);
  });
  
});
