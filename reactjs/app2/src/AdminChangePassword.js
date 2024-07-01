import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import getBase, { getImgBase } from "./api";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import showMessage, { ERR_MESSAGE } from "./messages";
import axios from 'axios';
import { withCookies, useCookies } from 'react-cookie';
export default function AdminChangePassword() {

  //create cookies array and its related  methods 
  let [cookies,setCookie,setMethod] = useCookies(['theeasylearn']);

  //create 3 state variable for 3 inputs
  let [password, setPassword] = useState('');
  let [newpassword, setNewPassword] = useState('');
  let [confirmpassword, setConfirmPassword] = useState('');

  //create function using useNavigate Hook 
  let navigate = useNavigate();
  
  let doChangePassword = function (e) {
    e.preventDefault();
    console.log(password, newpassword, confirmpassword);
    if(newpassword !== confirmpassword)
    {
      showMessage('new password and confirm new password must be same');
    }
    else 
    {
      //api call 
      let apiAddress = getBase() + "change_password.php";
      let form = new FormData();

      form.append("id",cookies['id']);
      form.append("password",password);
      form.append("newpassword",newpassword);
      
      //id=1&password=123123&newpassword=112233
      axios({
          method:'post',
          url:apiAddress,
          responseType:'json',
          data:form,
        }).then((response) =>
        { 
          console.log(response.data);
          let error = response.data[0]['error'];
          if(error !== 'no')
              showMessage(error);
          else 
          {
              let success = response.data[1]['success'];
              let message = response.data[2]['message'];
              if(success === 'no')
              {
                  showMessage(message);
              }
              else 
              {
                  showMessage(message,'success');
                  //pause script for 2 seconds 
                  setTimeout(()=>{
                      navigate("/");
                  },2000);
              }
          }
        }).catch((error) => {
            if(error.code === 'ERR_NETWORK')
              showMessage(ERR_MESSAGE)
        })
    }
  }
  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        {/* Menu */}
        <AdminMenu />
        <ToastContainer />
        {/* / Menu */}
        {/* Layout container */}
        <div className="layout-page">
          {/* Navbar */}
          <AdminHeader title='Settings' />
          {/* / Navbar */}
          {/* Content wrapper */}
          <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
              <div className="card shadow">
                <div className="card-header bg-primary p-3 d-flex justify-content-between">
                  <h4 className="text-white mb-0">Change Password</h4>
                </div>
                <div className="card-body">
                  <form className="mt-3" onSubmit={doChangePassword}>
                    <div className="form-floating mb-3">
                      <input type="password" className="form-control" id="currentPassword" placeholder="Current Password" required value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                      <label htmlFor="currentPassword">Current Password</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input type="password" className="form-control" id="newPassword" placeholder="New Password" required value={newpassword}
                        onChange={(e) => setNewPassword(e.target.value)} />
                      <label htmlFor="newPassword">New Password</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input type="password" className="form-control" id="confirmNewPassword" placeholder="Confirm New Password" required value={confirmpassword}
                        onChange={(e) => setConfirmPassword(e.target.value)} />
                      <label htmlFor="confirmNewPassword">Confirm New Password</label>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button type="submit" className="btn btn-primary">Save changes</button>&nbsp;
                      <button type="reset" className="btn btn-dark">clear all</button>
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
  )
}