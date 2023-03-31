
const Events = () => {
    const handleClick = () => {
        alert("Button Clicked");
    }

    return (
        <div className='container text-center mt-4'>
            <button onClick={handleClick} className='btn btn-success'>Click</button>
            <button className="btn btn-">Clear</button>
        </div>
    );
};

export default Events;