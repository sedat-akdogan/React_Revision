import { useState } from 'react';


function Button() {
    const [count, setCount] 
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