import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import {findbyattr} from '../../../Utils/index'

const setUp =(props={})=>{
  const component = shallow(<Header {...props} />);
  return component;
}


describe("header component ", () => {
 let component;
 beforeEach(()=>{
   component = setUp();
 }) 
  it("should render", () => {
    const wrapper = findbyattr(component,'headerComponent');
    expect(wrapper.length).toBe(1);
  });
  it("should render image", () => {
    const wrapper = findbyattr(component,'imagelogo');
    expect(wrapper.length).toBe(1);
  });
});
