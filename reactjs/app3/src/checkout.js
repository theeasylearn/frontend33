import React from 'react';
import Menu from './menu';
import Footer from './footer';
import withHooks from './myhooks';
import getBase from "./api";
import axios from "axios";
import showMessage from "./messages";
import { ToastContainer } from "react-toastify";

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  onChangeValue = (e) => {
    this.setState(
      { [e.target.name]: e.target.value }
    );
  }
  doCheckout = (e) => {
    e.preventDefault();
    console.log(this.state);
    let apiAddress = getBase() + "checkout.php";
    let form = new FormData();
    // / usersid,fullname,address1,address2,mobile,city,pincode,remarks
    let { cookies } = this.props;
    form.append('usersid', cookies['userid']);
    form.append('fullname', this.state.fullname);
    form.append('address1', this.state.address1);
    form.append('address2', this.state.address2);
    form.append('mobile', this.state.mobile);
    form.append('city', this.state.city);
    form.append('pincode', this.state.pincode);
    form.append('remarks', this.state.remarks);
    axios({
      method: 'post',
      responseType: 'json',
      url: apiAddress,
      data: form
    }).then((response) => {
      console.log(response.data);
      let error = response.data[0]['error'];
      if (error !== 'no')
        showMessage(error);
      else 
      {
          let success = response.data[1]['success'];
          let message = response.data[2]['message'];
          if(success === 'no')
            showMessage(message);
          else 
          {
            showMessage(message,'success');
          }
      }
    }).catch((error) => {
      if (error.code === 'ERR_NETWORK')
        showMessage('either you are or server is offline');
    })
  }
  render() {
    return (<div>
      <Menu />
      <main>
        <div className="container">
          <ToastContainer />
          <div className="row">
            <div className="col-8 offset-2">
              <h3 className="my-5">Checkout</h3>
            </div>
          </div>
          {/* end of row */}
          <div className="row mb-2">
            <div className="col-8 offset-2">
              <div className="card shadow">
                <div className="card-body">
                  <form method='post' onSubmit={this.doCheckout}>
                    <div className="form">
                      {/* fullname,address1,address2,mobile,city,pincode,remarks */}
                      <div className="mb-3">
                        <label htmlFor="fullname" className="form-label">Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="fullname"
                          placeholder="Enter your full name"
                          name="fullname"
                          required
                          value={this.state.fullname}
                          onChange={(e) => this.onChangeValue(e)}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="address1" className="form-label">Address Line 1</label>
                        <input
                          type="text"
                          className="form-control"
                          id="address1"
                          placeholder="Enter your address"
                          name="address1"
                          required
                          value={this.state.address1}
                          onChange={this.onChangeValue}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="address2" className="form-label">Address Line 2</label>
                        <input
                          type="text"
                          className="form-control"
                          id="address2"
                          placeholder="Enter your address"
                          name="address2"
                          required
                          value={this.state.address2}
                          onChange={this.onChangeValue}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="mobile" className="form-label">Mobile</label>
                        <input
                          type="tel"
                          className="form-control"
                          id="mobile"
                          placeholder="Enter your mobile number"
                          name="mobile"
                          required
                          value={this.state.mobile}
                          onChange={this.onChangeValue}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="city" className="form-label">City</label>
                        <input
                          type="text"
                          className="form-control"
                          id="city"
                          placeholder="Enter your city"
                          name="city"
                          required
                          value={this.state.city}
                          onChange={this.onChangeValue}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="pincode" className="form-label">Pincode</label>
                        <input
                          type="text"
                          className="form-control"
                          id="pincode"
                          placeholder="Enter your pincode"
                          name="pincode"
                          required
                          value={this.state.pincode}
                          onChange={this.onChangeValue}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="remarks" className="form-label">Remarks</label>
                        <textarea
                          className="form-control"
                          id="remarks"
                          rows={3}
                          placeholder="Enter any remarks"
                          name="remarks"
                          value={this.state.remarks}
                          onChange={this.onChangeValue}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Payment Method</label>
                        <div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="paymentMethod"
                              id="cod"
                              value="1"
                              required
                              onChange={this.onChangeValue}
                            />
                            <label className="form-check-label" htmlFor="cod">
                              Cash on Delivery (COD)
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="paymentMethod"
                              id="online"
                              value="2"
                              required
                              onChange={this.onChangeValue}
                            />
                            <label className="form-check-label" htmlFor="online">
                              Online Payment
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <button type="submit" className="btn btn-primary mx-3">Place Order</button>
                        <button type="reset" className="btn btn-danger">Clear all</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
    )
  }
}
export default withHooks(Checkout);