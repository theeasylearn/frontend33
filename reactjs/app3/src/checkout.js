import React from 'react';
import Menu from './menu';
import Footer from './footer';
class Checkout extends React.Component{
    render(){
        return(<div>
            <Menu/>
            <main>
  <div className="container">
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
            <div className="form">
              {/* fullname,address1,address2,mobile,city,pincode,remarks */}
              <div className="mb-3">
                <label htmlFor="fullname" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="fullname" placeholder="Enter your full name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="address1" className="form-label">Address Line 1</label>
                <input type="text" className="form-control" id="address1" placeholder="Enter your address" required />
              </div>
              <div className="mb-3">
                <label htmlFor="address2" className="form-label">Address Line 2</label>
                <input type="text" className="form-control" id="address2" placeholder="Enter your address" required />
              </div>
              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">Mobile</label>
                <input type="tel" className="form-control" id="mobile" placeholder="Enter your mobile number" required />
              </div>
              <div className="mb-3">
                <label htmlFor="city" className="form-label">City</label>
                <input type="text" className="form-control" id="city" placeholder="Enter your city" required />
              </div>
              <div className="mb-3">
                <label htmlFor="pincode" className="form-label">Pincode</label>
                <input type="text" className="form-control" id="pincode" placeholder="Enter your pincode" required />
              </div>
              <div className="mb-3">
                <label htmlFor="remarks" className="form-label">Remarks</label>
                <textarea className="form-control" id="remarks" rows={3} placeholder="Enter any remarks" defaultValue={""} />
              </div>
              <div className="mb-3">
                <label className="form-label">Payment Method</label>
                <div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="paymentMethod" id="cod" defaultValue={1} required />
                    <label className="form-check-label" htmlFor="cod">
                      Cash on Delivery (COD)
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="paymentMethod" id="online" defaultValue={2} required />
                    <label className="form-check-label" htmlFor="online">
                      Online Payment
                    </label>
                  </div>
                </div>
              </div>
              <div className="mb-3 ">
                <button type="submit" className="btn btn-primary mx-3">Place Order</button>
                <button type="reset" className="btn btn-danger">Clear all</button>
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
export default Checkout;