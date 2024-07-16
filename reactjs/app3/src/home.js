import React from 'react'
import Footer from "./footer";
import Menu from "./menu";
import getBase,{getImgBase} from './api';
import axios from 'axios';
import showMessage from './messages';

class Home extends React.Component{
  
  // componentDidMount()
  // {

  // }
  render(){
        return(<div>
            <Menu/>
              <main>
  <div className="container mt-5">
    
    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6 g-6">
      {/* col */}
      <div className="col">
        <a href="shop-grid.html" className="text-decoration-none text-inherit">
          {/* card */}
          <div className="card card-product  shadow">
            <div className="card-body text-center py-8">
              {/* img */}
              <img src="./shop/assets/images/category/category-dairy-bread-eggs.jpg" alt="Grocery Ecommerce Template" className="mb-3" />
              {/* text */}
              <div className="text-truncate">Dairy, Bread &amp; Eggs</div>
            </div>
          </div>
        </a>
      </div>
    </div>
    {/* featured section */}
    <section className="my-lg-14">
      <div className="container">
        {/* row */}
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="mb-8 mb-lg-0">
              {/* img */}
              <div className="mb-6"><img src="./shop/assets/images/icons/clock.svg" alt /></div>
              {/* title */}
              <h3 className="h5 mb-3">10 minute grocery now</h3>
              {/* text */}
              <p className="mb-0">Get your order delivered to your doorstep at the earliest from FreshCart pickup
                stores near you.</p>
            </div>
          </div>
          {/* col */}
          <div className="col-md-6 col-lg-3">
            <div className="mb-8 mb-lg-0">
              {/* img */}
              <div className="mb-6"><img src="./shop/assets/images/icons/gift.svg" alt /></div>
              {/* title */}
              <h3 className="h5 mb-3">Best Prices &amp; Offers</h3>
              {/* text */}
              <p className="mb-0">Cheaper prices than your local supermarket, great cashback offers to top it off. Get
                best pricess &amp; offers.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="mb-8 mb-lg-0">
              {/* img */}
              <div className="mb-6"><img src="./shop/assets/images/icons/package.svg" alt /></div>
              {/* title */}
              <h3 className="h5 mb-3">Wide Assortment</h3>
              {/* text */}
              <p className="mb-0">Choose from 5000+ products across food, personal care, household, bakery, veg and
                non-veg &amp; other categories.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="mb-8 mb-lg-0">
              {/* img */}
              <div className="mb-6"><img src="./shop/assets/images/icons/refresh-cw.svg" alt /></div>
              {/* title */}
              <h3 className="h5 mb-3">Easy Returns</h3>
              {/* text */}
              <p className="mb-0">
                Not satisfied with a product? Return it at the doorstep &amp; get a refund within hours. No
                questions asked
                <a href="#!">policy</a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</main>
<Footer/>

    </div>)
    }
}
export default Home;