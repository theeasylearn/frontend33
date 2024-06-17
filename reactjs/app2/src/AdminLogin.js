export default function AdminLogin()
{
	return(
		<div className="container-xxl">
      <div className="row">
        <div className="col-6 offset-3">
          <div className="authentication-wrapper authentication-basic container-p-y">
            <div className="authentication-inner">
              {/* Register */}
              <div className="card">
                <div className="card-body">
                  {/* Logo */}
                  <div className="app-brand justify-content-center">
                    <a href="index.html" className="app-brand-link gap-2">
                      <span className="app-brand-logo demo">
                        <img src="admin/assets/img/logo.png" />
                      </span>
                      <span className="app-brand-text demo text-body fw-bolder">Online shop</span>
                    </a>
                  </div>
                  {/* /Logo */}
                  <h4 className="mb-2">Admin Login</h4>
                  <form id="formAuthentication" className="mb-3" action="index.html" method="POST">
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="text" className="form-control" id="email" name="email-username" placeholder="Enter your email or username" autofocus />
                    </div>
                    <div className="mb-3 form-password-toggle">
                      <div className="d-flex justify-content-between">
                        <label className="form-label" htmlFor="password">Password</label>
                        <a href="auth-forgot-password-basic.html">
                          <small>Forgot Password?</small>
                        </a>
                      </div>
                      <div className="input-group input-group-merge">
                        <input type="password" id="password" className="form-control" name="password" placeholder="············" aria-describedby="password" />
                       
                      </div>
                    </div>
                    <div className="mb-3">
                      <button className="btn btn-primary d-grid w-100" type="submit">Sign in</button>
                    </div>
                  </form>
                </div>
              </div>
              {/* /Register */}
            </div>
          </div>
        </div>
      </div>
</div>
	)
}
