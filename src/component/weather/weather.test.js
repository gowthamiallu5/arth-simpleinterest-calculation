import React from "react";
import { shallow } from "enzyme";
import Weather from "./index";
import { findbyattr } from "../../../Utils/index";

describe("Testing displayed properly", () => {
  const wrapper = shallow(<Weather />);

  it("headings are displayed as per request", () => {
    //const head = wrapper.find("h1.head").text();
    const component = findbyattr(wrapper, "header");
    expect(component.text()).toBe("Weather");
  });

  it("button naming", () => {
    // const button = wrapper.find("button").text();
    const component = findbyattr(wrapper, "button");
    expect(component.text()).toEqual("Get Forecast");
  });

  it("form render", () => {
    expect(findbyattr(wrapper, "main").exists()).toBe(true);
  });
});
