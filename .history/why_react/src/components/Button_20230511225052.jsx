import


function Button() {
    function handleClick() {
        alert('Learning React!');
    }

    return (
        <button onClick={handleClick}>
            Click me
        </button>
    );
}

export default Button;