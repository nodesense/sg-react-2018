import React, {Component} from 'react';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
// V.dom
export default class App extends  Component {
    constructor() {
        super();

        // react keyword, state
        //intialize state
        // state is owned by component

        this.state = {
            title: 'Product App',
            year: 2018,
            address: {city: 'BLR', state: 'KA'}
        }

        //BAD Approach
        // this.title = 'Product App'
    }

    //react keyword
    // create & return virtual dom
    render() {
        // JSX 
        return (
            <div>
                <Header  title={this.state.title}/>
                <h1 id='myh'>Welcome to React</h1>

                <Home />
                
                <Footer title={this.state.title} 
                        year={this.state.year}
                        address={this.state.address}
                        />
            </div>
        )

        // return React.createElement('h1', 
        //                             {id: 'myh'},
        //                           'Welcome to React'
        //                         )
    }
}