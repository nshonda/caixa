import React, { Component } from 'react';
import {products} from './constants/Products';
import './App.css';

import Header from './components/Header';
import Product from './components/Product';

class App extends Component {

  constructor(props) {
    super(props);
    this.updateAmount = this.updateAmount.bind(this);
  }
  
  state = {
    products: products,
  }

  updateAmount(event, key){
    console.log(event);
  }

  render() {
    return (
      <div className="App">
        <Header />
        {products.map((product,index) => {
          return (
            <Product key={index} product={product} handleChange={this.updateAmount}/>
            )
        })}
      </div>
    );
  }
}

export default App;
