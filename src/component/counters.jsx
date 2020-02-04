import React, { Component } from 'react';

import Counter from './counter';

class Counters extends Component {


  render() { 
    const { counters, onDecrement, onDelete, onIncrement, onReset } = this.props;
    return ( 
      <div className="container p-5">
        <button onClick={onReset} className="btn btn-primary btn-lg">Reset</button>
        {counters.map(counter => <Counter 
                                    key={counter.id} 
                                    counter={counter} 
                                    onIncrement={onIncrement} 
                                    onDecrement={onDecrement} 
                                    onDelete={onDelete} 
                                />)}

      </div> 
    );
  }
}
 
export default Counters;