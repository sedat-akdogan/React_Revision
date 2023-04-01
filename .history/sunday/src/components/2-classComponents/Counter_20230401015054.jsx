
import { Component } from 'react';

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0,
        };
    }


    render() {
        return (
            <div className='container text-center mt-4'>
                <h1>{message}</h1>
                <button
                    onClick={handleClick} className='btn btn-success'>
                    Click
                </button>

                <button
                    onClick={() => handleClear("Clear Button Clicked")}
                    className="btn btn-dark">
                    Clear
                </button>

                <button onclick={handleChange} className="btn btn-danger">
                    Change
                </button>
            </div>
        );
    }
}

export default Counter;