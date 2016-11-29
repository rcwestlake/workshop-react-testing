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
});

describe('Grocery quantity and notes', () => {
  it('should have a p.Grocery-quantity element if a quantity is passed as a prop', () => {
    const wrapper = shallow(<Grocery name="Beef" quantity={'17 bunches'}/>);
    expect(wrapper.find('.Grocery-quantity').length).toEqual(1);
  });

  it('should not have a p.Grocery-quantity element if a quantity is NOT passed as a prop', () => {
    const wrapper = shallow(<Grocery name="Beef" />);
    expect(wrapper.find('.Grocery-quantity').length).toEqual(0);
  });

  it('should display the correct quantity', () => {
    const wrapper = shallow(<Grocery name="Beef" quantity={'10 lbs.'} />);
    expect(wrapper.find('.Grocery-quantity').text()).toEqual('Quantity: 10 lbs.');
  });

  it('should have a p.Grocery-notes element if notes are passed as a prop', () => {
    const wrapper = shallow(<Grocery name="Beef" notes="beef is so good" />);
    expect(wrapper.find('.Grocery-notes').length).toEqual(1);
  });

  it('should NOT have a p.Grocery-notes element if notes are NOT passed as a prop', () => {
    const wrapper = shallow(<Grocery name="Beef" />);
    expect(wrapper.find('.Grocery-notes').length).toEqual(0);
  });

  it('should display the correct notes', () => {
    const wrapper = shallow(<Grocery name="Beef" notes="beef is so good" />);
    expect(wrapper.find('.Grocery-notes').text()).toEqual('beef is so good');
  });
});

describe('.Grocery-purchase button', () => {
  it('should have a text of "Purchase" if purchased is false', () => {
    const wrapper = shallow(<Grocery name="Beef" purchased={false} />);
    expect(wrapper.find('.Grocery-purchase').text()).toEqual('Purchase');
  });

  it('should have a text of "Unpurchase" if purchased is true', () => {
    const wrapper = shallow(<Grocery name="Beef" purchased={true} />);
    expect(wrapper.find('.Grocery-purchase').text()).toEqual('Unpurchase');
  });
});

describe('.Grocery-star button', () => {
  it('should have a text of "Star" if star is false', () => {
    const wrapper = shallow(<Grocery name="Beef" starred={false} />);
    expect(wrapper.find('.Grocery-star').text()).toEqual('Star');
  });

  it('should have a text of "Star" if starred is NOT passed as prop', () => {
    const wrapper = shallow(<Grocery name="Beef" />);
    expect(wrapper.find('.Grocery-star').text()).toEqual('Star');
  });

  it('should have a text of "Unstar" if starred is true', () => {
    const wrapper = shallow(<Grocery name="Beef" starred={true} />);
    expect(wrapper.find('.Grocery-star').text()).toEqual('Unstar');
  });
});

describe('Purchase, star, remove functionality', () => {
  it('should call the onPurchase prop when clicked', () => {
    const onPurchaseMock = jest.fn();
    const wrapper = mount(<Grocery name="Beef" quantity={'17 bunches'} onPurchase={onPurchaseMock} />);
    wrapper.find('.Grocery-purchase').simulate('click');
    expect(onPurchaseMock).toBeCalled();
  });

  it('should call the onStar prop when clicked', () => {
    const onStarMock = jest.fn();
    const wrapper = mount(<Grocery name="Beef" quantity={'17 bunches'} onStar={onStarMock} />);
    wrapper.find('.Grocery-star').simulate('click');
    expect(onStarMock).toBeCalled();
  });

  it('should call the onDelete prop when clicked', () => {
    const onDelete = jest.fn();
    const wrapper = mount(<Grocery name="Beef" quantity={'17 bunches'} onDelete={onDelete} />);
    wrapper.find('.Grocery-remove').simulate('click');
    expect(onDelete).toBeCalled();
  });
});

describe('User data', () => {
  let groceries = [
    {
      id: 0,
      name: 'Pizza',
      quantity: 3,
      purchased: false,
      starred: false,
    },
    {
      id: 1,
      name: 'Ice cream',
      quantity: '2 box',
      purchased: false,
      starred: true,
    }
  ]

  it('should have the correct data length', () => {
    expect(wrapper.find('.Grocery').length).toEqual(2);
  });
});
