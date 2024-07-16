import React from "react";
class ForgotPassword extends React.Component {
  render() {
    return (<div>
      <div>
        <div className="border-bottom shadow-sm">
          <nav className="navbar navbar-light py-2">
            <div className="container justify-content-center justify-content-lg-between">
              <a className="navbar-brand" href="../index.html">
                <img src="./shop/assets/images/logo/freshcart-logo.svg" alt className="d-inline-block align-text-top" />
              </a>
            </div>
          </nav>
        </div>
        <main>
          {/* section */}
          <section className="my-lg-14 my-8">
            {/* container */}
            <div className="container">
              {/* row */}
              <div className="row justify-content-center align-items-center">
                <div className="col-12 col-md-6 col-lg-6">
                  {/* img */}
                  <img src="./shop/assets/images/svg-graphics/fp-g.svg" alt className="img-fluid" />
                </div>
                <div className="col-12  col-md-6 col-lg-6 order-1 d-flex align-items-center">
                  <div className="card shadow border">
                    <div className="card-body">
                      <div>
                        <div className="mb-lg-9 mb-5">
                          {/* heading */}
                          <h1 className="mb-2 h2 fw-bold">Forgot your password?</h1>
                        </div>
                        {/* form */}
                        <form className="needs-validation" >
                          {/* row */}
                          <div className="row g-3">
                            {/* col */}
                            <div className="col-12">
                              {/* input */}
                              <label htmlFor="formForgetEmail" className="form-label visually-hidden">Email address</label>
                              <input type="email" className="form-control" id="formForgetEmail" placeholder="Email" required />
                              <div className="invalid-feedback">Please enter correct password.</div>
                            </div>
                            {/* btn */}
                            <div className="col-12 d-grid gap-2">
                              <button type="submit" className="btn btn-primary">Recover account</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

    </div>)
  }
}
export default ForgotPassword;