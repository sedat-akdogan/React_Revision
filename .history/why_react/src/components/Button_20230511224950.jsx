function Button() {
    function handleClick() {
        alert('Learn!');
    }

    return (
        <button onClick={handleClick}>
            Click me
        </button>
    );
}

export default Button;