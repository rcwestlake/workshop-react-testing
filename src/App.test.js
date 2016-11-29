import React from 'react';
import ReactDOM from 'react-dom';
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
  it('should be a fake test', () => {
    const wrapper = shallow(<App groceries={groceries} />);
    expect(true).toEqual(true);
  });
});
