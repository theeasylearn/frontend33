import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";

export default function AdminProductDetail()
{
	return(
		<div>
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
          <div className="container-xxl flex-grow-1 container-p-y">
            <div className="card shadow">
              <div className="card-header bg-primary p-3 d-flex justify-content-between">
                <h4 className="text-white mb-0">IPhone - 15</h4>
                <a href="admin-product.html" className="btn btn-light">Back</a>
              </div>
              <div className="card-body">
                <div className="row mt-2">
                  <div className="col-lg-5">
                    <img src="https://picsum.photos/400" className="img-fluid shadow img-thumbnail" />
                    <hr />
                    <div className="d-flex justify-content-around">
                      <a title="edit" href="admin-edit-product.html">
                        <i className="bx bx-edit bx-md" />
                      </a>
                      <a href title="delete">
                        <i className="bx bx-trash bx-md" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <table className="table">
                      <tbody><tr>
                          <td className="fw-bold">id</td>
                          <td>1</td>
                        </tr>
                        <tr>
                          <td className="fw-bold">Category</td>
                          <td>Mobile</td>
                        </tr>
                        <tr>
                          <td className="fw-bold">Price</td>
                          <td>125000</td>
                        </tr>
                        <tr>
                          <td className="fw-bold">Quantity</td>
                          <td>100</td>
                        </tr>
                        <tr>
                          <td className="fw-bold">Weight</td>
                          <td>300 grams</td>
                        </tr>
                        <tr>
                          <td className="fw-bold">Size</td>
                          <td>Medium</td>
                        </tr>
                        <tr>
                          <td className="fw-bold">is Live</td>
                          <td>yes</td>
                        </tr>
                        <tr>
                          <td className="fw-bold">Detail</td>
                          <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eveniet id sequi obcaecati maxime rem atque architecto a numquam? Fugit vitae culpa iste libero maiores delectus porro ullam, quae dolores!</td>
                        </tr>
                      </tbody></table>
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
</div>
	)
}