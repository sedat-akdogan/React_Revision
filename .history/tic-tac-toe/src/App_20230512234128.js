function Square({ value }) {
    function handleClick() {

    }

    return (
        <button 
        className="square"
        >
        { value }
        </button>
    );
}

export default function Board() {
    return (
        <>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
        </>
    );
}
