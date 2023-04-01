
import { Component } from 'react';

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0,
        };
    }

    incremtn()


    render() {
        return (
            <div className='container text-center mt-4'>
                <h1>Classful Components</h1>
                <h2 className='display-4 text-danger'>COUNT: {this.state.count}</h2>
                <button onClick={increment} className='btn btn-success'>INC</button>
                <button className="btn btn-dark">CLR</button>
                <button className="btn btn-danger">DEC</button>
            </div>
        );
    }
}

export default Counter;