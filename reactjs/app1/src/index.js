import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
let num1 = 30;
let num2 = 7;
var page = (
    <div>
        <h1 className='heading'>3rd example in Reactjs</h1>
        <ul>
            <li>addition of {num1} and {num2}  = {num1 + num2}</li>
            <li>subtraction of {num1} and {num2}  = {num1 - num2}</li>
            <li>multiplication of {num1} and {num2}  = {num1 * num2}</li>
            <li>division of {num1} and {num2}  = {(num1 / num2).toFixed(2)}</li>
        </ul>
    </div>
)
root.render(page);
