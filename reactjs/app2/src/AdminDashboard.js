import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";
import axios from 'axios';
import { useEffect, useState } from "react";
import getBase from './api';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import showMessage from "./messages";
import { withCookies, useCookies } from 'react-cookie';
import VerifyLogin from './VerifyLogin';
function AdminDashboard()
{
  //create an array and functions for cookies
  VerifyLogin();
  let [categories,setCategory] = useState();
  let [products,setProducts] = useState();
  let [users,setUsers] = useState();
  let [orders,setOrders] = useState();
  let [daily,setDaily] = useState();
  let [weekly,setWeekly] = useState();
  let [monthly,setMonthly] = useState();
  let [yearly,setYearly] = useState();
  let [isDataFetched,setIsDataFetched] = useState(false);

  let fetchSummary = function()
  {
      if(isDataFetched === false)
      {
        let apiAddress = getBase() + "summery.php";
        axios({
          method: 'get',
          responseType: 'json',
          url: apiAddress
        }).then((response) => {
          console.log(response.data);
          let error = response.data[0]['error'];
          if (error !== 'no')
            showMessage(error);
          else {
            setCategory(response.data[1]['categories'])
            setProducts(response.data[1]['products'])
            setUsers(response.data[1]['users'])
            setOrders(response.data[1]['orders'])
            setDaily(response.data[1]['daily'])
            setWeekly(response.data[1]['weekly'])
            setMonthly(response.data[1]['monthly'])
            setYearly(response.data[1]['yearly'])
            setIsDataFetched(true);
          }
        }).catch((error) => {
          if (error['code'] === 'ERR_NETWORK')
            showMessage('either you are or server is offline (internet not available)');
        })
      }  
  }
  useEffect(() => fetchSummary())
	return(
		<div className="layout-wrapper layout-content-navbar">
  <div className="layout-container">
    {/* Menu */}
    <ToastContainer />
    <AdminMenu />
    {/* / Menu */}
    {/* Layout container */}
    <div className="layout-page">
      {/* Navbar */}
      <AdminHeader title='Dashboard' />
      {/* / Navbar */}
      {/* Content wrapper */}
      <div className="content-wrapper">
        <div className="container-xxl flex-grow-1 container-p-y">
          <div className="row mb-3">
            <div className="col-lg-3 col-md-4 col-12 mb-4">
              <div className="card">
                <div className="card-body">
                  <span className="fw-semibold d-block mb-1 fs-3 border-bottom text-primary">Products</span>
                  <h3 className="fs-4">{products}</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12 mb-4">
              <div className="card">
                <div className="card-body">
                  <span className="fw-semibold d-block mb-1 fs-3 border-bottom text-primary">Categories</span>
                  <h3 className="fs-4">{categories}</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12 mb-4">
              <div className="card">
                <div className="card-body">
                  <span className="fw-semibold d-block mb-1 fs-3 border-bottom text-primary">Users</span>
                  <h3 className="fs-4">{users}</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12 mb-4">
              <div className="card">
                <div className="card-body">
                  <span className="fw-semibold d-block mb-1 fs-3 border-bottom text-primary">todays sales</span>
                  <h3 className="fs-4">{daily}</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-lg-4 col-md-4 col-12 mb-4">
              <div className="card bg-danger">
                <div className="card-body">
                  <span className="fw-semibold d-block mb-1 fs-3 border-bottom text-white">Weekly orders</span>
                  <h3 className="fs-4 text-white">{weekly}</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12 mb-4">
              <div className="card bg-primary">
                <div className="card-body">
                  <span className="fw-semibold d-block mb-1 fs-3 border-bottom text-white">Monthly orders</span>
                  <h3 className="fs-4 text-white">{monthly}</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12 mb-4">
              <div className="card bg-warning">
                <div className="card-body">
                  <span className="fw-semibold d-block mb-1 fs-3 border-bottom  text-white">yearly order</span>
                  <h3 className="fs-4 text-white">{yearly}</h3>
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
export default withCookies(AdminDashboard);