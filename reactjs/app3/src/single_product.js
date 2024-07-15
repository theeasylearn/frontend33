import React from "react";
import Footer from "./footer";
import Menu from "./menu";
class SingleProduct extends React.Component {
    render() {
        return (
            <div>
                <Menu />
                <main>
                    <div className="container pt-5">
                       
                        {/* end of row */}
                        <div className="row">
                            <div className="col-md-5 col-xl-6">
                                {/* img slide */}
                                <div className="product" id="product">
                                    <div className="zoom" onmousemove="zoom(event)" style={{}}>
                                        <img src="./shop/assets/images/products/product-single-img-1.jpg" alt />
                                    </div>
                                </div>
                                {/* product tools */}
                            </div>
                            <div className="col-md-7 col-xl-6">
                                <div className="ps-lg-10 mt-6 mt-md-0">
                                    <h1 className="mb-1">Product name</h1>
                                    <div className="fs-4">
                                        {/* price */}
                                        <span className="fw-bold text-dark">Price</span>
                                    </div>
                                    {/* hr */}
                                    <hr className="my-6" />
                                    <div className="mt-3 row justify-content-start g-2 align-items-center">
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
                                                    <td>1</td>
                                                </tr>
                                                <tr>
                                                    <td>Availability:</td>
                                                    <td>25 In Stock</td>
                                                </tr>
                                                <tr>
                                                    <td>Size:</td>
                                                    <td />
                                                </tr>
                                                <tr>
                                                    <td>Weight:</td>
                                                    <td />
                                                </tr>
                                                <tr>
                                                    <td>Detail:</td>
                                                    <td>
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
export default SingleProduct;