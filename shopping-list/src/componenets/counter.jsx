import React, { Component } from 'react';


class Counter extends Component {
    state = {
        count: 0
    };

    render() {
        let classes = " m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return (
        <div>
            <h3 className={ classes }>{ this.formatCount() }</h3>
            <button className='btn btn-secondary btn-sm mt-5'>Increment</button>
        </div>
        );
    }
    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;