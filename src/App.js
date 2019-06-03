import React from 'react';
import './App.css';
import './styles/style.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import HotelSearch from './Containers/HotelSearch/HotelSearch';
// import Home from './Components/Home/Home';
const { registerObserver } = require('react-perf-devtool')
window.observer = registerObserver({}, callback)
function callback(measures) { }
  
function App() {
  return (
    <div className="App">
      <Layout>
          <Switch>
            {/* <Route path="/search" exact component={HotelSearch} /> */}
            <Route path="/" exact component={HotelSearch} />
            <Redirect from="*" to="/"/>
            
          </Switch>
        </Layout>
    </div>
  );
}

export default App;
