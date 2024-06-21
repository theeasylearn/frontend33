import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminAddCategory from './AdminAddCategory';
import AdminCategory from './AdminCategory';
import AdminEditCategory from './AdminEditCategory';

import AdminProduct from './AdminProduct';
import AdminAddProduct from './AdminAddProduct';
import AdminEditProduct from './AdminEditProduct';
import AdminProductDetail from './AdminProductDetail';
import AdminOrders from './AdminOrders';
import AdminOrdersDetail from './AdminOrdersDetail';

import AdminChangePassword from './AdminChangePassword';
import AdminDashboard from './AdminDashboard';
import AdminUsers from './AdminUsers';
import AdminForgotPassword from './AdminForgotPassword';
import AdminLogin from './AdminLogin';
import PrintBill from './print-bill';
import NoPageFound from './NoPageFound';
function MyRouter()
{
    return (<BrowserRouter>
        <Routes>
            <Route index path='/' element={<AdminLogin />} />
            <Route path='/admin-forgot-password' element={<AdminForgotPassword />} />
            <Route path='/admin-change-password' element={<AdminChangePassword />} />
            <Route path='/admin-users' element={<AdminUsers />} />
            <Route path='/admin-dashboard' element={<AdminDashboard />} />
            <Route path='/admin-product' element={<AdminProduct />} />
            <Route path='/admin-add-product' element={<AdminAddProduct />} />
            <Route path='/admin-edit-product' element={<AdminEditProduct />} />
            <Route path='/admin-product-detail' element={<AdminProductDetail />} />
            <Route path='/admin-category' element={<AdminCategory />} />
            <Route path='/admin-add-category' element={<AdminAddCategory />} />
            <Route path='/admin-edit-category' element={<AdminEditCategory />} />
            <Route path='/admin-orders' element={<AdminOrders />} />
            <Route path='/admin-orders-detail' element={<AdminOrdersDetail />} />
            <Route path='/admin-print-bill' element={<PrintBill />} />
            {/* create route for non existing page/route */}
            <Route path='*' element={<NoPageFound />} />
        </Routes>
    </BrowserRouter>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyRouter />);