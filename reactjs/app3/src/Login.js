import React from "react";
import Footer from './footer'
import getBase from './api';
import axios from 'axios';
import showMessage, { ERR_MESSAGE } from './messages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import withHooks from './myhooks';
import { Link } from "react-router-dom";
class Login extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {}; //empty state object
    }

    onChangeInput  = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    doLogin = (event) =>
    {
        console.log(this.state)
        event.preventDefault();
        let apiAddress = getBase() + "login.php";
        let form = new FormData();
        form.append("email",this.state.email);
        form.append("password",this.state.password);

        axios({
            method:'post',
            responseType:'json',
            url:apiAddress,
            data:form
        }).then((response) => {
            console.log(response.data);
            let error = response.data[0]['error'];
            if(error !== 'no')
                showMessage(error);
            else 
            {
                let success = response.data[1]['success'];
                let message = response.data[2]['message'];
                if(success === 'no')
                {
                    showMessage(message);
                }
                else 
                {
                    showMessage(message,'success');
                    
                }

            }
        }).catch((error) => {
            console.log(error);
        })
    }
    render() {
        return (<div>
            <main>
                {/* section */}
                <section className="my-lg-14 my-8">
                    <div className="container">
                        <ToastContainer />
                        {/* row */}
                        <div className="row justify-content-center align-items-center">
                            <div className="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
                                {/* img */}
                                <img src="./shop/assets/images/svg-graphics/signin-g.svg" alt className="img-fluid" />
                            </div>
                            {/* col */}
                            <div className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
                                <div className="mb-lg-9 mb-5">
                                    <h1 className="mb-1 h2 fw-bold">Sign in to FreshCart</h1>
                                    <p>Welcome back to Online shop! Enter your email to get started.</p>
                                </div>
<form className="needs-validation" onSubmit={this.doLogin} >
    <div className="row g-3">
        {/* row */}
        <div className="col-12">
            {/* input */}
            <label htmlFor="formSigninEmail" className="form-label visually-hidden">Email address</label>
            <input type="email" className="form-control" id="formSigninEmail" name="email" placeholder="Email" value={this.state.email} onChange={(e) => this.onChangeInput(e)} required />
        </div>
        <div className="col-12">
            {/* input */}
            <div className="password-field position-relative">
                <label htmlFor="formSigninPassword" className="form-label visually-hidden">Password</label>
                <div className="password-field position-relative">
                    <input type="password" className="form-control fakePassword" id="formSigninPassword" name="password" placeholder="*****" required
                    value={this.state.password} onChange={(e) => this.onChangeInput(e)} />
                </div>
            </div>
        </div>
        {/* btn */}
        <div className="col-12 d-grid"><button type="submit" className="btn btn-primary">Sign In</button></div>
        {/* link */}
        <div>
            Don’t have an account?
            <Link to="/register">Sign Up</Link>
        </div>
    </div>
</form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>

        );
    }
}
export default Login;