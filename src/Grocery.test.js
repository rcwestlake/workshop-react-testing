import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import Grocery from './Grocery';

describe('Grocery', function() {
  it('renders the name with an h3 tag', () => {
    const wrapper = shallow(<Grocery name="Beef" />);
    const title = <h3>Beef</h3>

    expect(wrapper.contains(title)).toEqual(true);
  });

  it('should have a class of .Grocery', () => {
    const wrapper = shallow(<Grocery name="Beef" />);
    expect(wrapper.is('.Grocery')).toEqual(true);
  });

  it('should have a className of starred if starred', () => {
    const wrapper = shallow(<Grocery name="Beef" starred={true} />);
    expect(wrapper.is('.starred')).toEqual(true);
  });

  it('should not have a className of "starred" if it is not starred', () => {
    const wrapper = shallow(<Grocery name="Beef" starred={false} />);
    expect(wrapper.is('.starred')).toEqual(false);
  });

  it('should have a className of "purchased" if it is purchased', () => {
    const wrapper = shallow(<Grocery name="Beef" purchased={true} />);
    expect(wrapper.is('.purchased')).toEqual(true);

  });

  it('should not have a className of "purchased" if it is not purchased', () => {
    const wrapper = shallow(<Grocery name="Beef" purchased={false} />);
    expect(wrapper.is('.purchased')).toEqual(false);
  });

  it('should not have a className of "purchased" if a prop is not passed', () => {
    const wrapper = shallow(<Grocery name="Beef" />);
    expect(wrapper.is('.purchased')).toEqual(false);
  });

  it('should have a p.Grocery-quantity element if a quantity is passed as a prop', () => {
    const wrapper = shallow(<Grocery name="Beef" quantity={'17 bunches'}/>)
  });
});
