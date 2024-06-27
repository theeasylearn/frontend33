import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";
import getBase, { getImgBase } from './api';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import showMessage, { ERR_MESSAGE } from "./messages";

//create state array
export default function AdminProduct()
{
  let [products, setProduct] = useState([]);
  //create function fetchProduct()
  let fetchProduct = function() {
      if(products.length === 0)
      {
        let apiAddress = getBase() + "product.php";
        //use axios class to call api
        axios({
          method: 'get',
          responseType: 'json',
          url: apiAddress
        }).then((response) => {
          console.log(response);
          let error = response.data[0]['error'];
          console.log(error);
          if (error !== 'no') {
            //there is some error
            showMessage(error);
          }
          else {
            let total = response.data[1]['total'];
            if (total === 0)
              showMessage('no product found');
            else {
              //delete 2object from begining
              response.data.splice(0, 2);
              //store remaining array into state array
              setProduct(response.data);

            }
          }
        }).catch((error) => {
          console.log(error);
          if (error['code'] === 'ERR_NETWORK')
            showMessage(ERR_MESSAGE);
        });
      }  
  }
  //fetch api should be called inside useEffect hook 
  useEffect(() => fetchProduct())
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
          <AdminHeader title='Product management' />
      {/* / Navbar */}
      {/* Content wrapper */}
      <div className="content-wrapper">
        <div className="container-xxl flex-grow-1 container-p-y">
          <div className="card shadow">
            <div className="card-header bg-primary p-3 d-flex justify-content-between">
              <h4 className="text-white mb-0">Product</h4>
              <Link to="/admin-add-product" className="btn btn-light">Add new product</Link>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th width="10%">id</th>
                      <th width="30%">Title <br />
                        Category
                      </th>
                      <th width="25%">Photo</th>
                      <th width="10%">price</th>
                      <th width="5%">Is Live</th>
                      <th width="20%">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((item) => {
                      return (<tr>
                        <td>{item['id']}</td>
                        <td>{item['title']} <hr /> {item['categorytitle']}</td>
                        <td>
                          <a className="example-image-link" href="https://picsum.photos/400" data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                            <img src={getImgBase() + "product/" + item['photo']} className="img-fluid example-image" />
                          </a>
                        </td>
                        <td>{item['price']}</td>
                        <td>{(item['islive'] === '1')?"yes":"no"}</td>
                        <td>
                          <Link title="edit" to="/admin-edit-product">
                            <i className="bx bx-edit bx-md" />
                          </Link>
                          <a href title="delete">
                            <i className="bx bx-trash bx-md" />
                          </a>
                          <Link to="/admin-product-detail" title>
                            <i className="bx bxs-detail bx-md" />
                          </Link>
                        </td>
                      </tr>)
                    })}
                  </tbody>
                </table>
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