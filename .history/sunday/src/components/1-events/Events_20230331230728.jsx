const Events = () => {
    const handleClick = () => {
        alert("Button Clicked");
    }

    const handleClear = (msg) => {
        alert(msg);
    }

    const handleChange = (event) => {
        console.log(event.target);
    }

    return (
        <div className='container text-center mt-4'>
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
};

export default Events; 