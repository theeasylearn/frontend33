import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './Login';
import Register from './register';
import SingleProduct from './single_product';
import Home from './home';
import ChangePassword from './change_password';
import Cart from './cart';
import Checkout from './checkout';
import ForgotPassword from './forgot_password';
import Product from './product';
import Logout from './logout';
import PageNotFound from './page_not_found';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
// routing
function MyRouter()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route index path='/' element={<Home />} />
                {/* static route */}
                <Route path='/product/' element={<Product />} />
                {/* dynamic route */}
                <Route path='/product/:categoryid' element={<Product />} />
                {/* dynamic route */}
                <Route path='/product-single/:productid' element={<SingleProduct />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/change-password' element={<ChangePassword />} />
                <Route path='/forgot-password' element={<ForgotPassword />} />
                <Route path='/logout' element={<Logout />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
root.render(<MyRouter />);