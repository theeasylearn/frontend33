import React from 'react'
import Menu from './menu'
import Footer from './footer'
import getBase, { getImgBase } from './api';
import axios from 'axios';
import showMessage, { ERR_MESSAGE } from './messages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import withHooks from './myhooks';
class Product extends React.Component {
  constructor(props) {
    super(props);
    // state array
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    const {params} = this.props;
    console.log(params);
    
    let apiAddress = getBase() + "product.php";
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
        response.data.splice(0, 2);
        this.setState({
          products: response.data
        });
      }
    }).catch((error) => {
      if (error.code === 'ERR_NETWORK')
        showMessage(ERR_MESSAGE);
    })
  }
  display = (item) =>
  {
    return (<div className="col ">
      {/* card product */}
      <div className="card card-product">
        <div className="card-body">
          {/* badge */}
          <div className="text-center position-relative">
            <a href="shop-single.html">
              {/* img */}
              <img src={getImgBase() + "product/" + item['photo']} alt="Grocery Ecommerce Template" className="mb-3 img-fluid" />
            </a>
            {/* action btn */}
           
          </div>
          {/* heading */}

          <h2 className="fs-6"><a href="shop-single.html" className="text-inherit text-decoration-none">{item['title']}</a></h2>

          {/* price */}
          <div className="d-flex justify-content-between align-items-center mt-3">
            <div>
              <span className="text-dark">{item['price']}</span>
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

    </div>)
  }
  render() {
    return (<div>
      <Menu />
      <main>
        <div className="container mb-2">
          <ToastContainer />
          <div className="row">
            <div className="col-12">
              <h3 className="my-5">heading</h3>
            </div>
          </div>
          <div className="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-3">
            {/* col */}
            {this.state.products.map((item) => this.display(item))}

          </div>
        </div>
      </main>
      <Footer />
    </div>)
  }
}
export default withHooks(Product);