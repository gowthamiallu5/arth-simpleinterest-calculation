import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";
import { findbyattr ,checkprops} from "../../../Utils/index";


const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("headline", () => {

    describe('checking prop types',()=>{
        it('should not throw a waring',()=>{
            const expectedproptypes={
                header:'test header',
                desc: 'test desc'
            }
            const properr = checkprops(Headline,expectedproptypes);
            expect(properr).toBeUndefined();
        })
    })
 
  describe("have props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "test header",
        desc: "test desc",
      };
      wrapper = setUp(props);
    });

    it("render component", () => {
      const component = findbyattr(wrapper, "headlinecomponent");
      expect(component.length).toBe(1);
    });

    it("render h1", () => {
        const h1 = findbyattr(wrapper, "header");
        expect(h1.length).toBe(1);
      });

      it("render desc", () => {
        const desc = findbyattr(wrapper, "desc");
        expect(desc.length).toBe(1);
      });
  });

  describe("have no props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });
    it("not render component", () => {
        const component = findbyattr(wrapper, "headlinecomponent");
        expect(component.length).toBe(0);
      });
  });
});
