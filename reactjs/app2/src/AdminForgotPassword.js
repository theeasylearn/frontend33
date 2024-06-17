export default function AdminForgorPassword() {
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
                    <a href="index.html" className="app-brand-link gap-2">
                      <img src="admin/assets/img/logo.png" />
                      <span className="app-brand-text demo text-body fw-bolder">Online shop</span>
                    </a>
                  </div>
                  {/* /Logo */}
                  <h4 className="mb-2">Forgot Password?</h4>
                  <p className="mb-4">Enter your email and we'll send you instructions to reset your password</p>
                  <form id="formAuthentication" className="mb-3" action="index.html" method="POST">
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="text" className="form-control" id="email" name="email" placeholder="Enter your email" autofocus />
                    </div>
                    <button className="btn btn-primary d-grid w-100">Recover Account</button>
                  </form>
                  <div className="text-center">
                    <a href="admin-login.html" className="d-flex align-items-center justify-content-center">
                      <i className="bx bx-chevron-left scaleX-n1-rtl bx-sm" />
                      Back to login
                    </a>
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