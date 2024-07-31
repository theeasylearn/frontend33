import React from "react";
import Menu from "./menu";
import Footer from "./footer";
import withHooks from "./myhooks";
import getBase from "./api";
import axios from "axios";
import showMessage from "./messages";
import { ToastContainer } from "react-toastify";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    //create state array
    this.state = {
      products: [],
      GrandTotal: 0
    }
  }

  componentDidMount() {
    let { cookies } = this.props;
    let apiAddress = getBase() + "cart.php?usersid=" + cookies['userid'];
    console.log(apiAddress);
    axios({
      method: 'get',
      responseType: 'json',
      url: apiAddress
    }).then((response) => {
      let error = response.data[0]['error'];
      if (error !== 'no')
        showMessage(error);
      else {
        let total = response.data[1]['total'];
        if (total === 0)
          showMessage('cart is empty');
        else {
          response.data.splice(0, 2);
          this.setState({
            products: response.data
          }, () => {
            //calculate total
            let temp = 0;
            this.state.products.map((item) => {
              temp += parseInt(item['price']) * parseInt(item['quantity']);
            });
            this.setState({
              GrandTotal: temp
            });
          });

        }
      }
    })
  }
  deleteFromcart = (cartid) => {
  let apiAddress = getBase() + "delete_from_cart.php?cartid=" + cartid;
    axios({
      method:'get',
      responseType:'json',
      url:apiAddress
    }).then((response) => {
      console.log(response.data);
      let error = response.data[0]['error'];
      if(error !== 'no')
          showMessage(error);
      else 
      {
        showMessage(response.data[1]['message']);
        //below code removed product from ui(required)
        var temptotal = 0
        var temp = this.state.products.filter((item) => {
         //   console.log(item,cartid);
            if(item['cartid'] !== cartid)
            {
                return item;
            }
            else 
            {
              temptotal = parseInt(item['price']) * parseInt(item['quantity']);
            }
        }); 
        // console.log(temp);
        this.setState({
            products:temp,
            GrandTotal: this.state.GrandTotal - temptotal
        });
      }
    })
  }
  display = (item) => {
    return (<div className="col-12">
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
                    <h6 className="mb-0">{item['title']}</h6>
                    &#8377; {item['price']} x {item['quantity']} nos
                  </a>
                  {/* text */}
                  <div className="mt-2 small lh-1">
                    <button type="button" className="btn btn-danger btn-sm"
                    onClick={() => this.deleteFromcart(item['cartid'])}>Remove</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2 text-end text-md-end col-md-2">
              <span className="fw-bold">&#8377; {item['price'] * item['quantity']}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>)
  }
  render() {
    return (
      <div>
        <Menu />

        <main style={{ "minHeight": "70vh" }}>
          <div className="container  shadow mt-4">
            <ToastContainer />
            <div className="row">
              <div className="col-12">
                <h3 className="my-5">Cart</h3>
              </div>
            </div>
            {/* end of row */}
            <div className="row">
              {this.state.products.map((item) => this.display(item))}
            </div>
            <div className="row">
              <div className="col-12 text-end">
                Total &#8377; {this.state.GrandTotal}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

}
export default withHooks(Cart);