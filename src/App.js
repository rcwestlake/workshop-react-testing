import React, { Component } from 'react';
import Grocery from './Grocery';
import './App.css';

let groceries = [
  {
    id: 0,
    name: 'Beef',
    quantity: '10 lbs.',
    notes: 'Beef is one of the greatest things on Earth.',
    purchased: false,
    starred: false,
  },
  {
    id: 1,
    name: 'Bowtie pasta',
    quantity: '3 bags',
    notes: 'When you buy this, you feel like you are in Italy.',
    purchased: true,
    starred: false,
  },
  {
    id: 2,
    name: 'Protein shakes',
    quantity: '30',
    notes: 'Been pumping iron and need to refuel',
    purchased: false,
    starred: true,
  }
]

class App extends Component {
  constructor() {
    super();

    this.state = {
      
    }
  }
  onPurchase() {

  }

  onStar() {

  }

  onDelete() {

  }

  render() {
    return (
      <main>
        {groceries.map((item, i) => {
          return <Grocery
            key={i}
            id={item.id}
            name={item.name}
            quantity={item.quantity}
            notes={item.notes}
            purchased={item.purchased}
            starred={item.starred}
          />
        })}
      </main>
    );
  }
}

export default App;
