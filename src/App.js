import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Layout from "./container/Layout/Layout";
import BurgerBuilder from "./container/Layout/BurgerBuilder/BurgerBuilder";
import Checkout from "./container/Layout/Checkout/Checkout";
import Orders from "./container/Layout/Orders/Orders";


class App extends Component {
  render() {
    return (
        <div>
            <Layout>
                <Switch>
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/orders" component={Orders} />
                    <Route path="/" exact component={BurgerBuilder} />
                </Switch>
            </Layout>
        </div>
    )
  }
}

export default App;
