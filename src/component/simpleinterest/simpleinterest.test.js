import React from "react";
import { shallow } from "enzyme";
import Simple from "./index";

describe("Testing displayed properly", () => {
  const wrapper = shallow(<Simple />);

  it("headings are displayed as per request", () => {
    const head = wrapper.find("h1.head").text();

    expect(head).toBe("Simple-Interest-Calculator");
  });

  it("button naming", () => {
    const button = wrapper.find("button").text();

    expect(button).toEqual("Simple-Interest");
  });

  it("form render", () => {
    expect(wrapper.find("form.simple-interest").exists()).toBe(true);
  });
});
