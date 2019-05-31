import React, { Component } from 'react';
import {products} from './constants/Products';
import './App.css';

import Header from './components/Header';
import DrawerMenu from './components/DrawerMenu';
import Product from './components/Product';
import Result from './components/Result';

class App extends Component {

  state = {
    chips: { 1 : 0, 2 : 0, 5 : 0},
    total: 0,
    open: false,
    products: products,
    drawerOpen: false,
  }

  constructor(props) {
    super(props);
    this.toggleVisible = this.toggleVisible.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.toggleDialog = this.toggleDialog.bind(this);
    this.updateAmount = this.updateAmount.bind(this);
    this.clear = this.clear.bind(this);
    this.calc = this.calc.bind(this);
  }

  toggleDialog() {
    this.setState({ open : !this.state.open });
  }

  toggleVisible(id){
    let products = [...this.state.products];
    products[id].visible = !products[id].visible;
    this.setState({ products: products });
  }

  toggleDrawer() {
    this.setState({ drawerOpen : !this.state.drawerOpen });
  }

  updateAmount(event, id){
    let products = [...this.state.products];
    products[id].amount = event;
    this.setState({ products: products });
  }

  calc(){
    let products = [...this.state.products];
    let total = 0;
    let chips = { 1 : 0, 2 : 0, 5 : 0 };
    products.map((product) => {
      if(product.visible){
        total += product.amount * product.value;
        console.log(product.distribution);
        Object.keys(product.distribution).map((chip, index) => {
          console.log(chip);
          return chips[chip] += product.distribution[chip] * product.amount;
        });
        return null;
      }
    });
    this.setState({total, chips });
    this.toggleDialog();
  }

  clear(){
    let products = [...this.state.products];
    products.map((product) => {
      return product.amount = 0;
    });
    this.setState({ products: products, total: 0, chips: { 1 : 0, 2 : 0, 5 : 0 }});
  }

  render() {
    return (
      <div className="App">
        <Header clearFn={this.clear} calcFn={this.calc} drawerFn={this.toggleDrawer} />
        <DrawerMenu open={this.state.drawerOpen} closeFn={this.toggleDrawer} products={this.state.products} visibleFn={this.toggleVisible} /> 
        {this.state.products.map((product,index) => {
          return (
            <Product key={index} id={index} value={this.state.products[index].amount} product={product} handleChange={this.updateAmount}/>
            )
        })}
        <Result open={this.state.open} toggleFn={this.toggleDialog} products={this.state.products} total={this.state.total} chips={this.state.chips} /> 
      </div>
    );
  }
}

export default App;
