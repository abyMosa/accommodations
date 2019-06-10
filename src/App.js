import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import React, { Component } from 'react';
import './App.css';
// import Posts from './posts/Posts';
// import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import HotelSearch from './Containers/HotelSearch/HotelSearch';

// const { registerObserver } = require('react-perf-devtool')
// window.observer = registerObserver({}, callback)
// function callback(measures) { }


class App extends Component {
    render() {
        return (
            <div className="App">
                <Layout>
                    {/* <Switch>
                        <Route path="/" exact component={HotelSearch} />
                        <Redirect from="*" to="/"/>
                        
                    </Switch> */}
                    <HotelSearch />
                </Layout>
            </div>
        );
    }
}

export default App;