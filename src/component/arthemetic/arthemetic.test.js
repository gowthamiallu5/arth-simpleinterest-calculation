import React from "react";
import { shallow } from "enzyme";
import Arthemetic from "./index";
import { findbyattr } from "../../../Utils/index";

const setUp = (props = {}) => {
  const component = shallow(<Arthemetic {...props} />);
  return component;
};

describe("Arthemetic component ", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it("should render", () => {
    const wrapper = findbyattr(component, "Arthemeticcomponent");
    expect(wrapper.length).toBe(1);
  });
  describe("number1 input", () => {
    it("Should capture number1 correctly onChange", () => {
      const number1 = findbyattr(component, "inputnumber1");
      number1.simulate("change",{target: {
        value: 0,
      }});
      expect(number1.prop('value')).toBe(
        0
      );
    });
  });

  describe("number2 input", () => {
    it("Should capture number2 correctly onChange", () => {
      const number2 = findbyattr(component, "inputnumber2");
      number2.simulate("change",{target: {
        value: 0,
      }});
      expect(number2.prop('value')).toBe(
        0
      );
    });
  });
});
