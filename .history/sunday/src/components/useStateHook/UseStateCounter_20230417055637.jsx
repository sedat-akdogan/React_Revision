// Hooks

const UseStateCounter = () => {
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
    )
};

export default UseStateCounter;