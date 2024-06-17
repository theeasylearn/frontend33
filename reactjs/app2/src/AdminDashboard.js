import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";

export default function AdminDashboard()
{
	return(
		<div className="layout-wrapper layout-content-navbar">
  <div className="layout-container">
    {/* Menu */}
    <AdminMenu />
    {/* / Menu */}
    {/* Layout container */}
    <div className="layout-page">
      {/* Navbar */}
      <AdminHeader title='Dashboard' />
      {/* / Navbar */}
      {/* Content wrapper */}
      <div className="content-wrapper">
        <div className="container-xxl flex-grow-1 container-p-y">
          <div className="row mb-3">
            <div className="col-lg-3 col-md-4 col-12 mb-4">
              <div className="card">
                <div className="card-body">
                  <span className="fw-semibold d-block mb-1 fs-3 border-bottom text-primary">Products</span>
                  <h3 className="fs-4">100</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12 mb-4">
              <div className="card">
                <div className="card-body">
                  <span className="fw-semibold d-block mb-1 fs-3 border-bottom text-primary">Categories</span>
                  <h3 className="fs-4">12</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12 mb-4">
              <div className="card">
                <div className="card-body">
                  <span className="fw-semibold d-block mb-1 fs-3 border-bottom text-primary">Users</span>
                  <h3 className="fs-4">25800</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12 mb-4">
              <div className="card">
                <div className="card-body">
                  <span className="fw-semibold d-block mb-1 fs-3 border-bottom text-primary">todays sales</span>
                  <h3 className="fs-4">10</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-lg-4 col-md-4 col-12 mb-4">
              <div className="card bg-danger">
                <div className="card-body">
                  <span className="fw-semibold d-block mb-1 fs-3 border-bottom text-white">Weekly orders</span>
                  <h3 className="fs-4 text-white">50</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12 mb-4">
              <div className="card bg-primary">
                <div className="card-body">
                  <span className="fw-semibold d-block mb-1 fs-3 border-bottom text-white">Monthly orders</span>
                  <h3 className="fs-4 text-white">200</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12 mb-4">
              <div className="card bg-warning">
                <div className="card-body">
                  <span className="fw-semibold d-block mb-1 fs-3 border-bottom  text-white">yearly order</span>
                  <h3 className="fs-4 text-white">2400</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-backdrop fade" />
      </div>
      {/* Content wrapper */}
    </div>
    {/* / Layout page */}
  </div>
  <div className="layout-overlay layout-menu-toggle" />
</div>
	)
}