import React from 'react';
import './App.css';
import './styles/style.css';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import HotelSearch from './Containers/HotelSearch/HotelSearch';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Layout>
          <Switch>
            <Route path="/search" exact component={HotelSearch} />
            <Route path="/" exact component={Home} />
          </Switch>
        </Layout>
    </div>
  );
}

export default App;
