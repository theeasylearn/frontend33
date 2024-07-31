import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
var page = (
    <div>
        <h1 className='heading'>2nd example in Reactjs</h1>
        <ul className='country'>
            <li>Apple</li>
            <li>Banana</li>
            <li>Mango</li>
            <li>Pinapple</li>
            <li>Graps</li>
        </ul>
    </div>
)
root.render(page);
