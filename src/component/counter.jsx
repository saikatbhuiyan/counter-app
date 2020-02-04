import React, { Component } from 'react';

class Counter extends Component {

    state = {
        value:this.props.value,
        // tags:['t1','t2', 't3']
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
        let { value } = this.state;
        return (value === 0 ? 'Zero' : value);
    }

 
    handleIncrement= () => {
        this.setState({value: this.state.value + 1})
    }

    handleDecrement= () => {
        this.setState({value: this.state.value - 1})
    }



    // renderTag() {
    //     if (this.state.tags.length === 0) return <p>There is no tag here!</p>;

    //     return this.state.tags.map(tag => <li key={tag}>{tag}</li>)
    // }


    render() { 
        return ( 
            <dir>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-primary btn-sm">Increment</button>
                <button onClick={this.handleDecrement} className="btn btn-danger m-2 btn-sm">Decrement</button>
                <button onClick={() => this.props.onDelete(this.props.id)} className="btn btn-danger m-2 btn-sm">Delete</button>
                {/* <ul>
                    {this.state.tags.length === 0 && 'Please create some tag'}
                    {this.renderTag()}
                </ul> */}
            </dir>
          
         );
    }


    getBadgeClasses() {
        let cls = "badge m-2  badge-lg  badge-";
        cls += this.state.value === 0 ? "warning" : "secondary";
        return cls;
    }
}
 
export default Counter;
