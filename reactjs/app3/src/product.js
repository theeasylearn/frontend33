import React from 'react'
import Menu from './menu'
import Footer from './footer'

class Product extends React.Component{
    render(){
        return(<div>
            <Menu/>
            <main>
  <div className="container mb-2">
    <div className="row">
      <div className="col-12">
        <h3 className="my-5">heading</h3>
      </div>
    </div>
    <div className="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-3">
      {/* col */}
      <div className="col ">
        {/* card product */}
        <div className="card card-product">
          <div className="card-body">
            {/* badge */}
            <div className="text-center position-relative">
              <div className="position-absolute top-0 start-0">
                <span className="badge bg-danger">Sale</span>
              </div>
              <a href="shop-single.html">
                {/* img */}
                <img src="./shop/assets/images/products/product-img-1.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" />
              </a>
              {/* action btn */}
              <div className="card-product-action">
                <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                  <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View" />
                </a>
                <a href="shop-wishlist.html" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart" /></a>
                <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right" /></a>
              </div>
            </div>
            {/* heading */}
            <div className="text-small mb-1">
              <a href="#!" className="text-decoration-none text-muted"><small>Snack &amp; Munchies</small></a>
            </div>
            <h2 className="fs-6"><a href="shop-single.html" className="text-inherit text-decoration-none">Haldiram's
                Sev
                Bhujia</a></h2>
            <div>
              {/* rating */}
              <small className="text-warning">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-half" />
              </small>
              <span className="text-muted small">4.5(149)</span>
            </div>
            {/* price */}
            <div className="d-flex justify-content-between align-items-center mt-3">
              <div>
                <span className="text-dark">$18</span>
                <span className="text-decoration-line-through text-muted">$24</span>
              </div>
              {/* btn */}
              <div>
                <a href="#!" className="btn btn-primary btn-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                    <line x1={12} y1={5} x2={12} y2={19} />
                    <line x1={5} y1={12} x2={19} y2={12} />
                  </svg>
                  Add
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
<Footer/>
        </div>)
    }
}
export default Product;