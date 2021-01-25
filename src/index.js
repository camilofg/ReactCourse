// Importe react and reactDOM libraries
import React from 'react'
import ReactDOM from 'react-dom'

function getButtonText(){
    return 'Click on Me!';
}

// Create react component
const App = () => {
    const buttonText = "Click Me!!";
    const style = { backgroundColor:'blue', color:'white' };
    return (
        <div>
            <label for="name" className="label">
                Enter name:
            </label>
            <input id="name" type="text" />
            <button style={{ backgroundColor:'blue', color:'white' }} >
            {/* call a variable this way {buttonText} is the same that calls a function */}
            {getButtonText()}
            </button>
            <button style={style}>Click Me!</button>
        </div>
    );
}

// Show react component created
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);

