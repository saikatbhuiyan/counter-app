import React, { Component } from 'react';

class Counter extends Component {



    formatCount() {
        let  value  = this.props.counter.value;
        return (value === 0 ? 'Zero' : value);
    }



    render() { 
        return ( 
            <dir>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-primary btn-sm">Increment</button>
                <button onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-info m-2 btn-sm">Decrement</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger m-2 btn-sm">Delete</button>
        
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
