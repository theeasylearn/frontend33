import React from "react";
import Footer from "./footer";
import getBase from './api';
import axios from 'axios';
import showMessage, { ERR_MESSAGE } from './messages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import withHooks from './myhooks';
class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    onChangeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    doRegister = (event) => {
        event.preventDefault();
        console.log(this.state);
        //check password and confirm password are same or not
        if (this.state.password !== this.state.confirmpassword) {
            showMessage('password and confirm password do not match');
        }
        else {
            let apiAddress = getBase() + "register.php";
            let form = new FormData();
            form.append("email", this.state.email);
            form.append("password", this.state.password);
            form.append("mobile", this.state.mobile);
            console.log(form);
            axios({
                method: 'post',
                responseType: 'json',
                url: apiAddress,
                data: form
            }).then((response) => {
                console.log(response.data);
                let error = response.data[0]['error'];
                if (error !== 'no')
                    showMessage(error);
                else if (response.data[1]['success'] === 'no')
                    showMessage(response.data[2]['message']);
                else if (response.data[1]['success'] === 'yes')
                {
                    showMessage(response.data[2]['message'], 'success');
                    //change screen/redirect user to login screen
                    setTimeout(() => {
                        let { navigate } = this.props;
                        navigate("/login");
                    },2000)
                }

            }).catch((error) => {
                if (error.code === 'ERR_NETWORK')
                    showMessage(ERR_MESSAGE);
            });
        }
    }
    render() {
        return (
            <div>
                <main>
                    <div className="container mt-5">
                        <ToastContainer />
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
                                <form onSubmit={this.doRegister}>
                                    <div className="row g-3">
                                        <div className="col-12 mb-3">
                                            {/* input */}
                                            <label htmlFor="formSignupEmail" className="form-label visually-hidden">Email address</label>
                                            <input type="email" className="form-control" id="formSignupEmail" name="email" placeholder="Email" required
                                                value={this.state.email} onChange={(e) => this.onChangeInput(e)} />
                                        </div>
                                        <div className="col-12 mb-3">
                                            {/* input */}
                                            <label htmlFor="mobile" className="form-label visually-hidden">Mobile</label>
                                            <input type="tel" name="mobile" className="form-control" id="mobile" placeholder="mobile" required value={this.state.mobile} onChange={(e) => this.onChangeInput(e)} />
                                        </div>
                                        <div className="col-12 mb-3">
                                            <div className="password-field position-relative">
                                                <label htmlFor="formSignupPassword" className="form-label visually-hidden">Password</label>
                                                <div className="password-field position-relative">
                                                    <input type="password" name="password" className="form-control fakePassword" id="formSignupPassword" placeholder="*****" required
                                                        value={this.state.password} onChange={(e) => this.onChangeInput(e)} />
                                                    <span><i className="bi bi-eye-slash passwordToggler" /></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 mb-3">
                                            <div className="password-field position-relative">
                                                <label htmlFor="formSignupPassword" className="form-label visually-hidden">Confirm Password</label>
                                                <div className="password-field position-relative">
                                                    <input type="password" name="confirmpassword" className="form-control fakePassword" id="formSignupPassword2" placeholder="*****" required
                                                        value={this.state.confirmPassword} onChange={(e) => this.onChangeInput(e)} />
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
export default withHooks(Register);