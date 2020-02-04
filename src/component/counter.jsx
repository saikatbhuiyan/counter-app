import React, { Component } from 'react';


class Counter extends Component {

    formatCount() {
        let  value  = this.props.counter.value;
        return (value === 0 ? 'Zero' : value);
    }

    render() { 
        return ( 
            <div className='row'>
                <div className="col-1">
                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                </div>
                <div className="col">
                                   
                    <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-primary btn-sm">+</button>
                    <button onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-info m-2 btn-sm" disabled={this.props.counter.value === 0 ? 'disabled' : '' }>-</button>
                    <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger m-2 btn-sm">x</button>
            
                </div>

            </div>
          
         );
    }


    getBadgeClasses() {
        let cls = "badge m-2  badge-lg  badge-";
        cls += this.props.counter.value === 0 ? "warning" : "secondary";
        return cls;
    }
}
 
export default Counter;
