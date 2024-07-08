import { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";
import VerifyLogin from "./VerifyLogin";
import { useParams, useNavigate } from "react-router-dom";
import getBase, { getImgBase } from "./api";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import showMessage, { ERR_MESSAGE } from "./messages";
import axios from 'axios';

export default function AdminEditProduct() {
  VerifyLogin();
  let { productid } = useParams();
  let [category, setCategory] = useState(''); //used to store selected category
  let [categories, setCategories] = useState([]); //used to store categories fetched by api
  let [title, setTitle] = useState('');
  let [photo, setPhoto] = useState(null); // Assuming photo is a file or URL
  let [oldPhoto, setOldPhoto] = useState(''); // Assuming photo is a file or URL
  let [price, setPrice] = useState(0);
  let [stock, setStock] = useState(0);
  let [weight, setWeight] = useState(0);
  let [size, setSize] = useState('');
  let [isLive, setIsLive] = useState(false);
  let [detail, setDetail] = useState('');
  let [isFetched, setIsFetched] = useState(false);
  let navigate = useNavigate();

  let fetchSingleProduct = function () {
    //api call
    if (isFetched === false) {
      let apiAddress = getBase() + "product.php?productid=" + productid;
      axios.get(apiAddress, {
        responseType: 'json'
      })
        .then((response) => {
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
              //store remaining 2nd object's properties into corresponding state variables
              setTitle(response.data[2]['title']);
              setPrice(response.data[2]['price']);
              setOldPhoto(response.data[2]['photo']);
              setStock(response.data[2]['stock']);
              setWeight(response.data[2]['weight']);
              setSize(response.data[2]['size']);
              setDetail(response.data[2]['detail']);
              setIsLive(response.data[2]['islive']);
              setCategory(response.data[2]['categoryid']);
              setIsFetched(true);
            }
          }
        })
        .catch((error) => {
          console.log(error);
          if (error['code'] === 'ERR_NETWORK')
            showMessage(ERR_MESSAGE);
        });
    }
  }
  let fetchCategories = function () {
    if (categories.length === 0) {
      //fetch categories from server
      let apiAddress = getBase() + "category.php";
      axios({
        method: 'get',
        responseType: 'json',
        url: apiAddress,
      }).then((response) => {
        console.log(response.data);
        let error = response.data[0]['error'];
        if (error !== 'no')
          showMessage(error);
        else {
          if (response.data[1]['total'] === 0)
            showMessage('no category found');
          else {
            //remove 2 element from array at begining
            response.data.splice(0, 2);
            setCategories(response.data);
          }
        }
      }).catch((error) => {
        if (error.code === 'ERR_NETWORK')
          showMessage(ERR_MESSAGE);
      });
    }

  }
  useEffect(() => {
    fetchCategories();
    fetchSingleProduct();

  });
  let updateProduct = function (e) {
    e.preventDefault();
    console.log(title, photo, price, stock, weight, size, isLive, detail, category);
    let apiAddress = getBase() + "update_product.php";
    
  }
  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        {/* Menu */}
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
              <ToastContainer />
              <div className="card shadow">
                <div className="card-header bg-primary p-3 d-flex justify-content-between">
                  <h4 className="text-white mb-0">Edit product</h4>
                  <a href="admin-product.html" className="btn btn-light">back</a>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-10">
                      <form onSubmit={updateProduct}>
                        <div className="row mb-3 mt-3">
                          {/* Category */}
                          <div className="col-md-4">
                            <label htmlFor="category" className="form-label">Category</label>
                            <select id="category" className="form-select" required onChange={(e) => setCategory(e.target.value)}>
                              <option value=''>Select Category</option>
                              {categories.map((item) => {
                                // alert(item['id']+ " " + category);
                                if (item['id'] == category)
                                  return <option selected value={item['id']}>{item['title']}</option>
                                else
                                  return <option value={item['id']}>{item['title']}</option>
                              })}
                            </select>
                          </div>
                          {/* Title */}
                          <div className="col-md-4">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" id="title" required
                              value={title} onChange={(e) => setTitle(e.target.value)} />
                          </div>
                          {/* Photo */}
                          <div className="col-md-4">
                            <label htmlFor="photo" className="form-label">Photo</label>
                            <input type="file" className="form-control" id="photo" accept="image/*" required
                              onChange={(e) => setPhoto(e.target.files[0])} />
                          </div>
                        </div>
                        <div className="row mb-3">
                          {/* Price */}
                          <div className="col-md-3">
                            <label htmlFor="price" className="form-label">Price</label>
                            <input type="number" className="form-control" id="price" required
                              value={price} onChange={(e) => setPrice(e.target.value)} />
                          </div>
                          {/* Stock */}
                          <div className="col-md-3">
                            <label htmlFor="stock" className="form-label">Stock</label>
                            <input type="number" className="form-control" id="stock" required
                              value={stock} onChange={(e) => setStock(e.target.value)} />
                          </div>
                          {/* Weight */}
                          <div className="col-md-3">
                            <label htmlFor="weight" className="form-label">Weight</label>
                            <input type="text" className="form-control" id="weight" required
                              value={weight} onChange={(e) => setWeight(e.target.value)} />
                          </div>
                          {/* Size */}
                          <div className="col-md-3">
                            <label htmlFor="size" className="form-label">Size</label>
                            <input type="text" className="form-control" id="size" required
                              value={size} onChange={(e) => setSize(e.target.value)} />
                          </div>
                        </div>
                        <div className="row mb-3">
                          {/* Is Live */}
                          <div className="col-md-3">
                            <label className="form-label">Is Live</label>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="islive" id="liveYes" defaultValue="yes" value="1" required onChange={(e) => setIsLive(e.target.value)} checked={isLive === '1'} />
                              <label className="form-check-label" htmlFor="liveYes">Yes</label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="islive" id="liveNo" defaultValue="no" value="0" required onChange={(e) => setIsLive(e.target.value)} checked={isLive === '0'} />
                              <label className="form-check-label" htmlFor="liveNo">No</label>
                            </div>
                          </div>
                          {/* Detail */}
                          <div className="col-md-9">
                            <label htmlFor="detail" className="form-label">Detail</label>
                            <textarea className="form-control" id="detail" rows={3} required onChange={(e) => setDetail(e.target.value)} value={detail}></textarea>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-12 text-end">
                            <button type="submit" className="btn btn-primary">Save changes</button>
                            <button type="reset" className="btn btn-dark">Clear all</button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="col-lg-2 pt-4">
                      <b>Existing photo</b>
                      <img src={getImgBase() + "product/" + oldPhoto} className="img-fluid " />
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