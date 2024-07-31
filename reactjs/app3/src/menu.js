import React from "react";
import { Link } from "react-router-dom";
import withHooks from "./myhooks";
class Menu extends React.Component {
    showEmail = () => {
        let { cookies } = this.props;
        if (cookies['email'] !== undefined)
            return "welcome " + cookies['email'];
        else
            return "";
    }
    userLinks = () => {
        let { cookies } = this.props;
        if (cookies['userid'] !== undefined)
        {
            return (<>
                <li className="nav-item">
                    <Link className="nav-link" to="/cart">Cart</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/checkout">Checkout</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/change-password">Change password</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/logout">Logout</Link>
                </li>
            </>)
        }
       
    }
    guestLinks = () => {
        let { cookies } = this.props;
        if (cookies['userid'] === undefined) {
            return (<>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                </li>

            </>)
        }

    }
    render() {
        return (
            <div>
                <header className="py-lg-5 py-4 px-0 border-bottom border-bottom-lg-0">
                    <div className="container-fluid">
                        <div className="row w-100 align-items-center g-0 gx-lg-3">
                            <div className="col-xxl-9 col-lg-8">
                                <div className="d-flex align-items-center">
                                    <a className="navbar-brand d-none d-lg-block" href="../index.html">
                                        <img src="/shop/assets/images/logo/freshcart-logo.svg" alt="eCommerce HTML Template" />
                                    </a>
                                </div>
                                <div className="d-flex justify-content-between w-100 d-lg-none">
                                    <a className="navbar-brand" href="../index.html">
                                        <img src="/shop/assets/images/logo/freshcart-logo.svg" alt="eCommerce HTML Template" />
                                    </a>
                                    <div className="d-flex align-items-center lh-1">
                                        {/* Menu Button */}
                                        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbar-default" aria-controls="navbar-default" aria-label="Toggle navigation">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor" className="bi bi-text-indent-left text-primary" viewBox="0 0 16 16">
                                                <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-0 py-lg-2 navbar-default">
                    <div className="container-fluid">
                        <div className="offcanvas offcanvas-start" tabIndex={-1} id="navbar-default" aria-labelledby="navbar-defaultLabel">
                            <div className="offcanvas-header pb-1">
                                <a href="index.html"><img src="./shop/assets/images/logo/freshcart-logo.svg" alt="eCommerce HTML Template" /></a>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                            </div>

                            <div className="d-flex justify-content-between align-content-center">
                                <h6 className="text-white mt-3"> {this.showEmail()}</h6>
                                <uls className="navbar-nav d-flex justify-content-end">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/product">Product</Link>
                                    </li>
                                    {this.userLinks()}
                                    {this.guestLinks()}

                                   
                                </uls>
                            </div>

                        </div>
                    </div>
                </nav>
            </div>

        );
    }
}
export default withHooks(Menu);