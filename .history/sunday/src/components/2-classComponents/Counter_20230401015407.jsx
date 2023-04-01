
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
                <button className='btn btn-success'>INC</button>

                <button className="btn btn-dark">CLR</button>

                <button  className="btn btn-danger"></button>
            </div>
        );
    }
}

export default Counter;