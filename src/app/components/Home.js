import React from 'react';

export default class Home extends React.Component {
    constructor() {
        super();

        this.state = {
            counter: 0,
            title: 'Home'
        }
    }

    //ES6
    increment() {
        console.log("increment called");

        //BAD 1, mutate state directly
        this.state.counter++;
        //this.state.counter =  this.state.counter + 1;
        console.log("counter ", this.state.counter);

        //BAD 2, calling forceUpdate
        // calls render
        this.forceUpdate();
    }

    //ES.NEXT approach, to solve 'this'
    // Create function only once per component
    decrement = () => {
        console.trace();
        console.log("Decrement ", this.state.counter);
        //GOOD, for state mutation
        // this shall trigger render method
        //async function
        this.setState({
            counter: this.state.counter - 1
        })
        console.log("After decrement ", this.state.counter);
    }

    render() {
        console.log("Home render");
        let _this2 = this;
        return (
            <div>
                <h2>{this.state.title}</h2>
                <p>Counter: {this.state.counter}</p>
               
                <button onClick={() => this.increment() }> 
                                Incr
                </button>


                <button onClick={function onClick() { 
                                       _this2.increment();
                            } }> 
                                Incr 3
                </button>


                <button onClick={this.decrement}> 
                            Decr 
                </button>
            </div>
        )
    }
}