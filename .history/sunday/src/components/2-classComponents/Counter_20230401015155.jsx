
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
                <h1>Classful Components</h1>
                <buttonclassName='btn btn-success'>
                    Click
                </buttonclassName=>

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