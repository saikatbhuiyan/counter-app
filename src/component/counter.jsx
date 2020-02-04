import React, { Component } from 'react';

class Counter extends Component {

    // state = {
    //     value: this.props.counter.value,
    //     // tags:['t1','t2', 't3']
    // }

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
        let  value  = this.props.counter.value;
        return (value === 0 ? 'Zero' : value);
    }

    // handleIncrement = () => {
    //     this.setState({ value: this.state.value + 1 })
    // }

    // handleDecrement = () => {
    //     this.setState({ value: this.state.value - 1 })
    // }



    // renderTag() {
    //     if (this.state.tags.length === 0) return <p>There is no tag here!</p>;

    //     return this.state.tags.map(tag => <li key={tag}>{tag}</li>)
    // }


    render() { 
        return ( 
            <dir>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-primary btn-sm">Increment</button>
                <button onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-info m-2 btn-sm">Decrement</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger m-2 btn-sm">Delete</button>
                {/* <ul>
                    {this.state.tags.length === 0 && 'Please create some tag'}
                    {this.renderTag()}
                </ul> */}
            </dir>
          
         );
    }


    getBadgeClasses() {
        let cls = "badge m-2  badge-lg  badge-";
        cls += this.props.counter.value === 0 ? "warning" : "secondary";
        return cls;
    }
}
 
export default Counter;
