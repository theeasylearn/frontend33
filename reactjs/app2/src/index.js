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
import AdminViewProductDetail from './AdminViewProductDetail';

import AdminOrders from './AdminOrders';
import AdminOrdersDetail from './AdminOrdersDetail';

import AdminChangePassword from './AdminChangePassword';
import AdminDashboard from './AdminDashboard';
import AdminUsers from './AdminUsers';
import AdminForgorPassword from './AdminForgotPassword';
import AdminLogin from './AdminLogin';
function MyRouter()
{
    return (<BrowserRouter>
        <Routes>
            <Route index path='/' element={<AdminLogin />} />
        </Routes>
    </BrowserRouter>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyRouter />);