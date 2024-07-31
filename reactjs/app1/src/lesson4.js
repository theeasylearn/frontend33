/* importing required react components */
import React from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
//declaration of variable
var page = (
    <div className='container'>
        <div className='row mt-5'>
            <div className='col-6 offset-3'>
                {/* card is one type of box which has header and body */}
                <div className='card shadow'>
                    <div className="card-header">
                        <h4>Login</h4>
                    </div>
                    <div className="card-body">
                        <form action="">
                            <div className="mb-3">
                                <label htmlFor="email" className='form-label'>Email</label>
                                <input type="email" id='email' className='form-control' placeholder='email address' required />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className='form-label'>Password</label>
                                <input type="password" id='password' className='form-control' placeholder='password' required />
                            </div>

                            <div className='d-flex justify-content-end'>
                                <input type="submit" name='submit' className='btn btn-primary' value='Login' />
                                <input type="reset" value="clear all" className='btn btn-danger' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
root.render(page);
//root render method display everthing inside page on screen