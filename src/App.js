import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import HotelSearch from './Containers/HotelSearch/HotelSearch';


function App() {
  return (
    <div className="App">
      <Layout>
          <Switch>
            {/* <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} /> */}
            <Route path="/" exact component={HotelSearch} />
          </Switch>
        </Layout>
    </div>
  );
}

export default App;
