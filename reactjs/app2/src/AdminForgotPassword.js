import { Link } from "react-router-dom"
export default function AdminForgotPassword() {
  return (
    <div className="container-xxl">
      <div className="row">
        <div className="col-lg-6 offset-3">
          <div className="authentication-wrapper authentication-basic container-p-y">
            <div className="authentication-inner py-4">
              {/* Forgot Password */}
              <div className="card">
                <div className="card-body">
                  {/* Logo */}
                  <div className="app-brand justify-content-center">
                    <a href="#" className="app-brand-link gap-2">
                      <img src="admin/assets/img/logo.png" />
                      <span className="app-brand-text demo text-body fw-bolder">Online shop</span>
                    </a>
                  </div>
                  {/* /Logo */}
                  <h4 className="my-4 text-center">Forgot Password?</h4>
                  <p>Enter your email and we'll send you instructions to reset your password</p>
                  <form id="formAuthentication"  method="POST">
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="text" className="form-control" id="email" name="email" placeholder="Enter your email" autofocus />
                    </div>
                    <button type="submmit" className="btn btn-primary d-grid w-100">Recover Account</button>
                  </form>
                  <div className="text-center mt-2">
                    <Link to="/" className="d-flex align-items-center justify-content-center">
                      <i className="bx bx-chevron-left scaleX-n1-rtl bx-sm" />
                      Back to login
                    </Link>
                  </div>
                </div>
              </div>
              {/* /Forgot Password */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}