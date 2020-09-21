import checkPropTypes from 'check-prop-types';

 export const findbyattr =(component,attr)=>{
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
  }

export const  checkprops =(component,expectedProps)=>{
  const properr = checkPropTypes(component.propTypes,expectedProps,'props',component.name);
  return properr
}