function Button() {
    function handleClick() {
        alert('You clicked me!');
    }

    return (
        <button onClick>
            Click me
        </button>
    );
}

export default Button;