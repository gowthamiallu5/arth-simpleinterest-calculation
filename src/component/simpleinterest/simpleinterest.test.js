import React from "react";
import { shallow } from "enzyme";
import Simple from "./index";
import { findbyattr } from "../../../Utils/index";

describe("Testing displayed properly", () => {
  const wrapper = shallow(<Simple />);

  it("headings are displayed as per request", () => {
    const head = findbyattr(wrapper, "head").text();

    expect(head).toBe("Simple-Interest-Calculator");
  });

  it("button naming", () => {
    const button = findbyattr(wrapper, "button").text();

    expect(button).toEqual("Simple-Interest");
  });

  it("form render", () => {
    expect(findbyattr(wrapper, "simple-interest").exists()).toBe(true);
  });
});
