import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('App', () => {
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
  it('should have a clear button', () => {
    const wrapper = mount(<App groceries={groceries} />);
    expect(wrapper.find('.Grocery-clear').length).toEqual(1);
  });

  it.skip('should be disabled if grocery is empty', () => {
    groceries = [];
    const wrapper = mount(<App groceries={groceries} />);
    expect(wrapper.is('disabled')).toEqual(true);
  });

  it('should have a p.count', () => {
    const wrapper = mount(<App groceries={groceries} />);
    expect(wrapper.find('.count').text()).toEqual('# of Items: 2');
  });

  it('should have a p.count of 0 when there are no groceries', () => {
    groceries = [];
    const wrapper = mount(<App groceries={groceries} />);
    expect(wrapper.find('.count').text()).toEqual('# of Items: 0');
  });
});

describe('Clear button', () => {
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

  it('should call the onClear func when clicked ', () => {
    const onClearGroceriesMock = jest.fn();
    const wrapper = mount(<App groceries={groceries} />);
    wrapper.find('.Grocery-clear').simulate('click');
    expect(onClearGroceriesMock).toBeCalled();
  });
});
