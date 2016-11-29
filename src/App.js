import React, { Component } from 'react';
import Grocery from './Grocery';
import './App.css';

class App extends Component {
  constructor(...props) {
    super(...props);

    this.state = {
      groceries: this.props.groceries || [],
    }
  }

  onPurchase() {
    console.log('purchase');
  }

  onStar() {
    console.log('star');
  }

  onDelete() {
    console.log('delete');
  }

  onClearGroceries() {
    console.log('clear');
  }

  render() {
    const { groceries } = this.state;

    let disabledToggle = false;
    if (groceries.length < 1) {
      disabledToggle = true;
    }

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
            onPurchase={this.onPurchase}
            onDelete={this.onDelete}
            onStar={this.onStar}
          />
        })}
        <p className='count'># of Items: {groceries.length}</p>
        <button
          className="Grocery-clear"
          disabled={disabledToggle}
          onClick={() => this.onClearGroceries()}>
          Clear Groceries
        </button>
      </main>
    );
  }
}

export default App;
