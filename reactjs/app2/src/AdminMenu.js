import React from 'react';
import { Link } from 'react-router-dom';
export default function AdminMenu() {
    return (
        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
            <div className="app-brand demo">
                <Link to="/" className="app-brand-link">
                    <span className="app-brand-logo demo">
                        <img src="admin/assets/img/logo.png" alt="Logo" />
                    </span>
                    <span className="app-brand-text demo menu-text fw-bolder ms-2">Online shop</span>
                </Link>
                <Link to="#" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
                    <i className="bx bx-chevron-left bx-sm align-middle" />
                </Link>
            </div>
            <div className="menu-inner-shadow" />
            <ul className="menu-inner py-1">
                {/* Dashboard */}
                <li className="menu-item">
                    <Link to="/admin-dashboard" className="menu-link border shadow-sm">
                        <i className="bx bxs-tachometer" /> Dashboard
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to="/admin-category" className="menu-link border shadow-sm">
                        <i className="bx bxs-purchase-tag-alt" /> Categories
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to="/admin-product" className="menu-link border shadow-sm">
                        <i className="bx bxs-box" /> Products
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to="/admin-orders" className="menu-link border shadow-sm">
                        <i className="bx bxs-cart" /> Orders
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to="/admin-users" className="menu-link border shadow-sm">
                        <i className="bx bxs-user" /> Customers
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to="/admin-change-password" className="menu-link border shadow-sm">
                        <i className="bx bxs-lock" /> Change password
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to="/admin-logout" className="menu-link border shadow-sm">
                        <i className="bx bxs-exit" /> Logout
                    </Link>
                </li>
            </ul>
        </aside>
    );
}
