import React from 'react';
import Menu from './menu';
import Footer from './footer';

class ChangePassword extends React.Component {
    render() {
        return (<div>
            <Menu />
            <div className="container my-2">
                <div className="row">
                    <div className="col-12 col-sm-5">
                        <img src="./shop/assets/images/svg-graphics/fp-g.svg" alt className="img-fluid" />
                    </div>
                    <div className="col-12 col-sm-7">
                        <div className="card shadow">
                            <div className="card-header border-success">
                                <h2>Change Password</h2>
                            </div>
                            <div className="card-body">
                                <form action="">
                                    <div className="password-field position-relative">
                                        <label htmlFor="formSignupPassword" className="form-label "> Current Password</label>
                                        <div className="password-field position-relative">
                                            <input type="password" className="form-control fakePassword" id="formSignupPassword" placeholder="*****" required />
                                        </div>
                                    </div>
                                    <div className="password-field position-relative mt-1">
                                        <label htmlFor="formSignupPassword" className="form-label "> New Password</label>
                                        <div className="password-field position-relative">
                                            <input type="password" className="form-control   fakePassword" id="formSignupPassword" placeholder="*****" required />
                                        </div>
                                    </div>
                                    <div className="password-field position-relative mt-1">
                                        <label htmlFor="formSignupPassword" className="form-label "> Confirm Password</label>
                                        <div className="password-field position-relative">
                                            <input type="password" className="form-control   fakePassword" id="formSignupPassword" placeholder="*****" required /></div>

                                    </div>
                                    <button type='submit' className='btn btn-primary mt-3'> Save Changes </button>
                                    <button type='button' className='btn btn-primary mt-3 ms-2  '> Back </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>)
    }
}

export default ChangePassword;
