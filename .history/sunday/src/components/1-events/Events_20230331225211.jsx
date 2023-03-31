
const Events = () => {
    const handleClick = () => {
        alert("Button Clicked");
    }

const handleClear

    return (
        <div className='container text-center mt-4'>
            <button onClick={handleClick} className='btn btn-success'>Click</button>
            <button onclick={handleClear} className="btn btn-dark">Clear</button>
        </div>
    );
};

export default Events;