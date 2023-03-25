import './App.css';

function MyButton() {
    return (
        <button>
            I am a button
        </button>
    );
}

export default function MyApp() {
    return (
        <div>
            <h1>Welcome to my flyinf drones app</h1>
            <MyButton />
        </div>
    );
}