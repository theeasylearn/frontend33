/* importing required react components */
import React from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
function updateDateTime()
{
    //create date class object
    let now = new Date();
    let output = (
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <table>
                        <tr>
                            <td>Hour</td>
                            <td>Minute</td>
                            <td>Second</td>
                        </tr>
                        <tr>
                            <td>{now.getHours()}</td>
                            <td>{now.getMinutes()}</td>
                            <td>{now.getSeconds()}</td>
                        </tr>
                        <tr>
                            <td>Day</td>
                            <td>Month</td>
                            <td>Year</td>
                        </tr>
                        <tr>
                            <td>{now.getDate()}</td>
                            <td>{now.getMonth()+1}</td>
                            <td>{now.getFullYear()}</td>
                        </tr>
                        
                    </table>
                </div>
            </div>
        </div>
    )
    root.render(output);
}
// updateDateTime();
const SECOND = 1;
const INTERVAL_IN_SECONDS = SECOND * 1000;
setInterval(updateDateTime,INTERVAL_IN_SECONDS);