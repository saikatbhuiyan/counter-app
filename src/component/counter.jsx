import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count:0,
        tags:['t1','t2', 't3']
    }

/*
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        console.log("Increment", this);
    }

*/

    formatCount() {
        let { count } = this.state;
        return (count === 0 ? 'Zero' : count);
    }

 
    handleIncrement= () => {
        this.setState({count: this.state.count + 1})
    }

    handleDecrement= () => {
        this.setState({count: this.state.count - 1})
    }


    renderTag() {
        if (this.state.tags.length === 0) return <p>There is no tag here!</p>;

        return this.state.tags.map(tag => <li key={tag}>{tag}</li>)
    }


    render() { 
        return ( 
            <dir>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-primary btn-sm">Increment</button>
                <button onClick={this.handleDecrement} className="btn btn-danger m-2 btn-sm">Decrement</button>
                {/* <ul>
                    {this.state.tags.length === 0 && 'Please create some tag'}
                    {this.renderTag()}
                </ul> */}
            </dir>
          
         );
    }


    getBadgeClasses() {
        let cls = "badge m-2  badge-lg  badge-";
        cls += this.state.count === 0 ? "warning" : "secondary";
        return cls;
    }
}
 
export default Counter;
