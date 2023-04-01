
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
                <button className='btn btn-success'></button>

                <button className="btn btn-dark">Clear</button>

                <button  className="btn btn-danger">Change</button>
            </div>
        );
    }
}

export default Counter;