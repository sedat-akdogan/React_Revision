// Hooks

const UseStateCounter = () => {
    return (
        <div className='container text-center mt-4'>
        <h1></h1>
        <h2 className='display-4 text-danger'>COUNT: {this.state.count}</h2>
        <button onClick={this.increment} className='btn btn-success'>INC</button>
        <button onClick={this.clear} className="btn btn-dark">CLR</button>
        <button onClick={this.decrement} className="btn btn-danger">DEC</button>
    </div>
    )
};

export default UseStateCounter;