import React from "react";
import Footer from "./footer";
class Register extends React.Component {
    render() {
        return (
            <div>
                <main>
                    <div className="container mt-5">
                        <div className="row justify-content-center align-items-center mb-5">
                            <div className="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
                                {/* img */}
                                <img src="./shop/assets/images/svg-graphics/signup-g.svg" alt className="img-fluid" />
                            </div>
                            {/* col */}
                            <div className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
                                <div className="mb-lg-9 mb-5">
                                    <h1 className="mb-1 h2 fw-bold">Get Start Shopping</h1>
                                    <p>Welcome to Online shop! Enter your email to get started.</p>
                                </div>
                                {/* form */}
                                <form>
                                    <div className="row g-3">
                                        <div className="col-12 mb-3">
                                            {/* input */}
                                            <label htmlFor="formSignupEmail" className="form-label visually-hidden">Email address</label>
                                            <input type="email" className="form-control" id="formSignupEmail" placeholder="Email" required />
                                        </div>
                                        <div className="col-12 mb-3">
                                            {/* input */}
                                            <label htmlFor="mobile" className="form-label visually-hidden">Mobile</label>
                                            <input type="tel" className="form-control" id="mobile" placeholder="mobile" required />
                                        </div>
                                        <div className="col-12 mb-3">
                                            <div className="password-field position-relative">
                                                <label htmlFor="formSignupPassword" className="form-label visually-hidden">Password</label>
                                                <div className="password-field position-relative">
                                                    <input type="password" className="form-control fakePassword" id="formSignupPassword" placeholder="*****" required />
                                                    <span><i className="bi bi-eye-slash passwordToggler" /></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 mb-3">
                                            <div className="password-field position-relative">
                                                <label htmlFor="formSignupPassword" className="form-label visually-hidden">Confirm Password</label>
                                                <div className="password-field position-relative">
                                                    <input type="password" className="form-control fakePassword" id="formSignupPassword" placeholder="*****" required />
                                                    <span><i className="bi bi-eye-slash passwordToggler" /></span>
                                                    <div className="invalid-feedback">Please enter password.</div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* btn */}
                                        <div className="col-12 d-grid mb-3"><button type="submit" className="btn btn-primary">Register</button></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}
export default Register;