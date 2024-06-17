import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";

export default function AdminViewProductDetail()
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
      <AdminHeader title='Product management' />
      {/* / Navbar */}
      {/* Content wrapper */}
      <div className="content-wrapper">
        {/* Content */}
        <div className="container-xxl flex-grow-1 container-p-y">
          <div className="row mb-3">
            <div className="col-12 d-flex justify-content-between">
              <h4 className="fw-bold py-1 mb-1">Products</h4>
              <a href="admin-product.html" className="btn btn-primary">Back</a>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <h5 className="card-header">Existing Product</h5>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <tbody className="top-text">
                        <tr>
                          <td width="25%">Category</td>
                          <td />
                        </tr>
                        <tr>
                          <td width="25%">Product Id</td>
                          <td />
                        </tr>
                        <tr>
                          <td width="25%">Name</td>
                          <td />
                        </tr>
                        <tr>
                          <td width="25%">Price</td>
                          <td />
                        </tr>
                        <tr>
                          <td width="25%">Stock</td>
                          <td />
                        </tr>
                        <tr>
                          <td width="25%">Weight</td>
                          <td />
                        </tr>
                        <tr>
                          <td width="25%">Size</td>
                          <td />
                        </tr>
                        <tr>
                          <td width="25%">Detail</td>
                          <td />
                        </tr>
                        <tr>
                          <td width="25%">Photo</td>
                          <td>
                            <img src="https://picsum.photos/300?random=2" className="img-fluid" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Basic Bootstrap Table */}
        </div>
      </div>
    </div>
  </div>
</div>
	)
}