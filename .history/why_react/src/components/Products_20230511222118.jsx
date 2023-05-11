const list = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
];

function () {
    const listItems = list.map(product =>
        <li
            key={list.id}
            style={{
                color: list.isFruit ? 'magenta' : 'darkgreen'
            }}
        >
            {list.title}
        </li>
    );

    return (
        <ul>{listItems}</ul>
    );
}

export default ShoppingList;