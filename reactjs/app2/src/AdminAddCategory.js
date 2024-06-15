export default function AdminAddCategory()
{
    return (<div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
            {/* Menu */}
            <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
                <div className="app-brand demo">
                    <a href="index.html" className="app-brand-link">
                        <span className="app-brand-logo demo">
                            <img src="admin/assets/img/logo.png" alt />
                        </span>
                        <span className="app-brand-text demo menu-text fw-bolder ms-2">Online shop</span>
                    </a>
                    <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
                        <i className="bx bx-chevron-left bx-sm align-middle" />
                    </a>
                </div>
                <div className="menu-inner-shadow" />
                <ul className="menu-inner py-1">
                    {/* Dashboard */}
                    <li className="menu-item">
                        <a href="admin-dashboard.html" className="menu-link border shadow-sm">
                            <i className="bx bxs-tachometer" /> Dashboard
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="admin-category.html" className="menu-link border shadow-sm">
                            <i className="bx bxs-purchase-tag-alt" /> Categories
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="admin-product.html" className="menu-link border shadow-sm">
                            <i className="bx bxs-box" /> Products
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="admin-orders.html" className="menu-link border shadow-sm">
                            <i className="bx bxs-cart" /> Orders
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="admin-users.html" className="menu-link border shadow-sm">
                            <i className="bx bxs-user" /> Customers
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="admin-change-password.html" className="menu-link border shadow-sm">
                            <i className="bx bxs-lock" /> Change password
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="#" className="menu-link border shadow-sm">
                            <i className="bx bxs-exit" /> Logout
                        </a>
                    </li>
                </ul>
            </aside>
            {/* / Menu */}
            {/* Layout container */}
            <div className="layout-page">
                {/* Navbar */}
                <nav className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
                    <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                        <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                            <i className="bx bx-menu bx-sm" />
                        </a>
                    </div>
                    <div className="navbar-nav-right" id="navbar-collapse">
                        <h4 className="my-2">Category management</h4>
                    </div>
                </nav>
                {/* / Navbar */}
                {/* Content wrapper */}
                <div className="content-wrapper">
                    <div className="container-xxl flex-grow-1 container-p-y">
                        <div className="card shadow">
                            <div className="card-header bg-primary p-3 d-flex justify-content-between">
                                <h4 className="text-white mb-0">Add new category</h4>
                                <a href="admin-category.html" className="btn btn-light">back</a>
                            </div>
                            <div className="card-body">
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
                                        <input type="submit" value="Save" className="btn btn-primary" />&nbsp;
                                        <input type="reset" value="clear all" className="btn btn-dark" />
                                    </div>
                                </form>
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