function Button() {
    function handleClick() {
        alert('Learning !');
    }

    return (
        <button onClick={handleClick}>
            Click me
        </button>
    );
}

export default Button;