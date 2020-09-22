import React from "react";
import { shallow } from "enzyme";
import Weather from "./index";

describe("Testing displayed properly", () => {
  const wrapper = shallow(<Weather />);

  it("headings are displayed as per request", () => {
    const head = wrapper.find("h1.head").text();

    expect(head).toBe("Weather");
  });

  it("button naming", () => {
    const button = wrapper.find("button").text();

    expect(button).toEqual("Get Forecast");
  });

  it("form render", () => {
    expect(wrapper.find("form.main").exists()).toBe(true);
  });
});
