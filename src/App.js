

function App() {
    let name = 'Larissa';
    let age = 26;

    return <div>
        <h1>{new Date().toLocaleTimeString()}</h1>
        <h2>My name is {name}, I am {age} years old</h2>
        <input type="number" min={5} placeholder="hi there"/>
    </div>;
}

export default App;