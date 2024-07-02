import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";
import { Link } from "react-router-dom";
import VerifyLogin from "./VerifyLogin";
export default function AdminUsers()
{
  VerifyLogin();
	return(
		<div className="layout-wrapper layout-content-navbar">
  <div className="layout-container">
    {/* Menu */}
    <AdminMenu />
    {/* / Menu */}
    {/* Layout container */}
    <div className="layout-page">
      {/* Navbar */}
      <AdminHeader title='User management' />
      {/* / Navbar */}
      {/* Content wrapper */}
      <div className="content-wrapper">
        <div className="container-xxl flex-grow-1 container-p-y">
          <div className="card shadow">
            <div className="card-header bg-primary p-3 d-flex justify-content-between">
              <h4 className="text-white mb-0">Existing Users</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="mt-2 table table-sm table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>id</th>
                      <th>Email</th>
                      <th>Mobile</th>
                      <th>Register at</th>
                      <th>History</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>ankit@gmail.com</td>
                      <td>1234567890</td>
                      <td>15-june-2024</td>
                      <td>
                        <Link to="/admin-orders" title="view shoping history">
                          <i className="bx bxs-detail bx-md" />
                        </Link>
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