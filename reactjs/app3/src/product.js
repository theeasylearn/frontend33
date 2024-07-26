import React from 'react'
import Menu from './menu'
import Footer from './footer'
import getBase, { getImgBase } from './api';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import showMessage, { ERR_MESSAGE } from './messages';
import 'react-toastify/dist/ReactToastify.css';
import withHooks from './myhooks';
import { Link } from 'react-router-dom';
class Product extends React.Component {
  constructor(props) {
    super(props);
    // state array
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    let {params} = this.props;
    // console.log(params);
    let {categoryid}  = params;
    // console.log(categoryid);
    let apiAddress;
    if(categoryid === undefined)
      apiAddress = getBase() + "product.php";
    else 
      apiAddress = getBase() + "product.php?categoryid=" + categoryid;

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

  addtoCart = (productid) => {
    let { cookies } = this.props;

    let apiAddress = getBase() + "add_to_cart.php?productid=" + productid + "&usersid=" + cookies['userid'];
    console.log(apiAddress);
    axios({
      method:'post',
      url:apiAddress,
      responseType:'json'
    }).then((response) => {
        let error = response.data[0]['error'];
        if(error!=='no')
        {
          showMessage(error);
        }
        else 
        {
          showMessage(response.data[1]['message'],'success');
        }
    })
  }
  display = (item,index) =>
  {
    return (<div className="col" key={index}>
      {/* card product */}
      <div className="card card-product">
        <div className="card-body">
          {/* badge */}
          <div className="text-center position-relative">
            <Link to={"/product-single/" + item['id']}>
              {/* img */}
              <img src={getImgBase() + "product/" + item['photo']} alt="Grocery Ecommerce Template" className="mb-3 img-fluid" />
            </Link>
            {/* action btn */}
           
          </div>

          <h2 className="fs-6"><a href="shop-single.html" className="text-inherit text-decoration-none">{item['title']}</a></h2>

          {/* price */}
          <div className="d-flex justify-content-between align-items-center mt-3">
            <div>
              <span className="text-dark">{item['price']}</span>
            </div>
            {/* btn */}
            <div>
              <button className="btn btn-primary btn-sm" onClick={() => this.addtoCart(item['id'])}>
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                  <line x1={12} y1={5} x2={12} y2={19} />
                  <line x1={5} y1={12} x2={19} y2={12} />
                </svg>
                Add
              </button>
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
        <div className="container mb-2 mt-3">
          <ToastContainer />
        
          <div className="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-3">
            {/* col */}
            {this.state.products.map((item,index) => this.display(item,index))}

          </div>
        </div>
      </main>
      <Footer />
    </div>)
  }
}
export default withHooks(Product);