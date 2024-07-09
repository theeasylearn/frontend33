import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";
import VerifyLogin from "./VerifyLogin";
/*
    http://www.theeasylearnacademy.com/shop/ws/update_category.php
    method: post,
    input, id,title,photo,islive (required)
    [{"error":"input is missing"}] 
    [{"error":"no"},{"success":"yes"},{"message":"category updated"}]
*/
export default function AdminEditCategory()
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
          <AdminHeader title='Category management' />
      {/* / Navbar */}
      {/* Content wrapper */}
      <div className="content-wrapper">
        <div className="container-xxl flex-grow-1 container-p-y">
          <div className="card shadow">
            <div className="card-header bg-primary p-3 d-flex justify-content-between">
              <h4 className="text-white mb-0">Edit category</h4>
              <a href="admin-category.html" className="btn btn-light">back</a>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-9">
                  <form action>
                    <div className="mb-3 mt-3">
                      <label htmlFor="title" className="form-label">Title</label>
                      <input id="title" type="text" className="form-control" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="photo" className="form-label">Select Photo</label>
                      <input type="file" name="photo" id="photo" className="form-control" required />
                    </div>
                    <label htmlFor className="form-label">is live?</label>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="islive" defaultChecked required id="yes" />
                      <label className="form-check-label" htmlFor="yes">Yes</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="islive" required id="no" />
                      <label className="form-check-label" htmlFor="no">No</label>
                    </div>
                    <div className="d-flex justify-content-end">
                      <input type="submit" defaultValue="Save" className="btn btn-primary" />&nbsp;
                      <input type="reset" defaultValue="clear all" className="btn btn-dark" />
                    </div>
                  </form>
                </div>
                <div className="col-lg-3 pt-3">
                  <b>Existing photo</b>
                  <img src="https://picsum.photos/200" className="img-fluid " />
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
