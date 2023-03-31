
const Events = () => {
    const handleClick = () => {
        alert("Button Clicked");
    }

    const handleClear = (msg) => {
        alert(msg);
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

            <button className="btn btn-">

            </button>
        </div>
    );
};

export default Events; 