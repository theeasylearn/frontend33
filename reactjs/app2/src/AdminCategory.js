import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";

export default function AdminCategory()
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
        <AdminHeader />
      {/* / Navbar */}
      {/* Content wrapper */}
      <div className="content-wrapper">
        <div className="container-xxl flex-grow-1 container-p-y">
          <div className="card shadow">
            <div className="card-header bg-primary p-3 d-flex justify-content-between">
              <h4 className="text-white mb-0">Categories</h4>
              <a href="admin-add-category.html" className="btn btn-light">Add new category</a>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th width="10%">id</th>
                      <th width="30%">Title</th>
                      <th width="30%">Photo</th>
                      <th width="5%">Is Live</th>
                      <th width="25%">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mobile</td>
                      <td>
                        <a className="example-image-link" href="https://picsum.photos/400" data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                          <img src="https://picsum.photos/100" className="img-fluid example-image" />
                        </a>
                      </td>
                      <td>Yes</td>
                      <td>
                        <a className="btn btn-dark" href="admin-edit-category.html">Edit</a>
                        <a className="btn btn-danger" href>Delete</a>
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
	);
}
