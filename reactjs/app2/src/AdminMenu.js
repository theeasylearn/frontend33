export default function AdminMenu()
{
    return (<aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
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
    </aside>);
}