import React from "react";
import Menu from "./menu";
import Footer from "./footer";

class Cart extends React.Component{
    render(){
        return(
        <div>
            <Menu/>

 <main style={{"min-height":"70vh"}}>
  <div className="container  shadow mt-4">
    <div className="row">
      <div className="col-8 offset-2">
        <h3 className="my-5">Cart</h3>
      </div>
    </div>
    {/* end of row */}
    <div className="row">
      <div className="col-8 offset-2">
        <ul className="list-group list-group-flush">
          {/* list group */}
          <li className="list-group-item py-3 ps-0 border-top">
            {/* row */}
            <div className="row align-items-center">
              <div className="col-6 col-md-6 col-lg-10">
                <div className="d-flex">
                  <img src="./shop/assets/images/products/product-img-1.jpg" alt="Ecommerce" className="icon-shape icon-xxl" />
                  <div className="ms-3">
                    {/* title */}
                    <a href="shop-single.html" className="text-inherit">
                      <h6 className="mb-0">Product Name</h6>
                    </a>
                    {/* text */}
                    <div className="mt-2 small lh-1">
                      <button type="button" className="btn btn-danger btn-sm">Remove</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-2 text-end text-md-end col-md-2">
                <span className="fw-bold">100</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div className="row">
      <div className="col-8 offset-2 text-end">
        Total Rs 2500
      </div>  
    </div>
  </div>
 </main>
 <Footer/>
        </div>
        )
    }
    
}
export default Cart;