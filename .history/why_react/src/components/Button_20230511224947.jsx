function Button() {
    function handleClick() {
        alert('!');
    }

    return (
        <button onClick={handleClick}>
            Click me
        </button>
    );
}

export default Button;