const list = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
];

function Products() {
    const listItems = list.map(list =>
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

export default Products;