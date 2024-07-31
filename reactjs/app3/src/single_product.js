import React from "react";
import Footer from "./footer";
import Menu from "./menu";
import getBase,{getImgBase} from "./api";
import product from "./product";
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import showMessage, { ERR_MESSAGE } from './messages';
import 'react-toastify/dist/ReactToastify.css';
import withHooks from './myhooks';
import { Link } from 'react-router-dom';
class SingleProduct extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            products : [] // empty state array/list
        }
    }
    componentDidMount()
    {
        let { params } = this.props;
        let {productid} = params; 
        let apiAddress = getBase() + "product.php?productid=" + productid;
        console.log(apiAddress);
        axios({
            method: 'get',
            responseType: 'json',
            url: apiAddress
        }).then((response) => {
            console.log(response.data);
            let error = response.data[0]['error'];
            if (error !== 'no')
                showMessage(error);
            else if (response.data[1]['total'] === 0)
                showMessage('no product found');
            else {
                response.data.splice(0,2);
                this.setState({
                    products: response.data
                });
            }
        }).catch((error) => {
            if (error.code === 'ERR_NETWORK')
                showMessage(ERR_MESSAGE);
        })
    }
    render() {
        let product = this.state.products.length > 0 ? this.state.products[0] : null;
        if(product != null)
        {
            return (
                <div>
                    <Menu />
                    <main>
                        <div className="container pt-5">
                            <ToastContainer />
                            {/* end of row */}
                            <div className="row">
                                <div className="col-md-5 col-xl-6">
                                    {/* img slide */}
                                    <div className="product" id="product">
                                        <div className="zoom" onmousemove="zoom(event)" style={{}}>
                                            <img src={getImgBase() + "product/" + product['photo']} alt />
                                        </div>
                                    </div>
                                    {/* product tools */}
                                </div>
                                <div className="col-md-7 col-xl-6">
                                    <div className="ps-lg-10 mt-6 mt-md-0">
                                        <h1 className="mb-1">{product['title']}</h1>
                                        <div className="fs-4">
                                            {/* price */}
                                            <span className="fw-bold text-dark">{product['price']}</span>
                                        </div>
                                        {/* hr */}
                                        <hr className="my-6" />
                                        <div className="mt-3 row justify-content-start g-2 align-i`tem`s-center">
                                            <div className="col-xxl-4 col-lg-4 col-md-5 col-5 d-grid">
                                                {/* button */}
                                                {/* btn */}
                                                <button type="button" className="btn btn-primary">
                                                    <i className="feather-icon icon-shopping-bag me-2" />
                                                    Add to cart
                                                </button>
                                            </div>
                                        </div>
                                        {/* hr */}
                                        <hr className="my-6" />
                                        <div>
                                            {/* table */}
                                            <table className="table table-borderless mb-0">
                                                <tbody>
                                                    <tr>
                                                        <td>Product Code:</td>
                                                        <td>{product['id']}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Availability:</td>
                                                        <td>{product['stock']} In Stock</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Size:</td>
                                                        <td>{product['size']}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Weight:</td>
                                                        <td>{product['weight']}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Detail:</td>
                                                        <td>
                                                            {product['detail']}
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>

                    <Footer />
                </div>
            );
        }
    }
}
export default withHooks(SingleProduct);