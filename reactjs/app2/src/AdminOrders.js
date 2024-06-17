import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";

export default function AdminOrders()
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
          <AdminHeader title='Order management' />
      {/* / Navbar */}
      {/* Content wrapper */}
      <div className="content-wrapper">
        <div className="container-xxl flex-grow-1 container-p-y">
          <div className="card shadow">
            <div className="card-header bg-primary p-3 d-flex justify-content-between">
              <h4 className="text-white mb-0">Recent Orders</h4>
            </div>
            <div className="card-body pt-3">
              <div className="table-responsive">
                <table className="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Order Status</th>
                      <th>Delivery Address</th>
                      <th width="5%" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Fri 14-06-2024</td>
                      <td>250000</td>
                      <td>confirmed</td>
                      <td>
                        Ankit Patel <br />
                        Bhavnagar - 364001
                      </td>
                      <td>
                        <a href="admin-orders-detail.html" title="order detail">
                          <i className="bx bxs-detail bx-md" />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
