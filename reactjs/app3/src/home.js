import React from 'react'
import Footer from "./footer";
import Menu from "./menu";
import getBase, { getImgBase } from './api';
import axios from 'axios';
import showMessage,{ERR_MESSAGE} from './messages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
class Home extends React.Component {

  constructor(props) {
    super(props);
    console.log('constructor is called')
    // create state array
    this.state = {
      categories : []
    }
  }
  componentDidMount() {
    
    console.log('component did mount method is called.')
    let apiAddress = getBase() + "category.php";
    /*
    [
      {"error":"no"},
      {"total":6},
      {"id":"1","title":"laptop","photo":"laptop.jpg","islive":"1","isdeleted":"0"},{"id":"2","title":"mobile","photo":"mobile.jpg","islive":"1","isdeleted":"0"},{"id":"3","title":"book","photo":"books.jpg","islive":"1","isdeleted":"0"},{"id":"4","title":"Cookies & waffers","photo":"Cookies.jpg","islive":"1","isdeleted":"0"},{"id":"5","title":"Washing Powders","photo":"washing_powders.jpg","islive":"1","isdeleted":"0"},{"id":"6","title":"shampoo","photo":"shampoo.jpg","islive":"1","isdeleted":"0"}
    ]
    */
    axios({
      method: 'get',
      responseType: 'json',
      url: apiAddress
    }).then((response) => {
        console.log(response.data);
        let error = response.data[0]['error'];
        if(error !== 'no')
          showMessage(error);
        else if (response.data[1]['total'] === 0)
          showMessage('no category found');
        else 
        {
            response.data.splice(0,2);
            this.setState({
                categories:response.data
            });
        }
    }).catch((error) => {
      if (error.code === 'ERR_NETWORK')
        showMessage(ERR_MESSAGE);
    })
  }
  render() {
    console.log('render method is called...')
    return (<div>
      <Menu />
      <main>
        <div className="container mt-5">
          <ToastContainer />
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6 g-6">
              {this.state.categories.map((item,index) => {
                return (<div className="col" key={index}>
                  <Link to={"/product/" + item['id']} className="text-decoration-none text-inherit">
                    {/* card */}
                    <div className="card card-product  shadow">
                      <div className="card-body text-center py-8">
                        {/* img */}
                        <img src={getImgBase() + "category/" + item['photo']}  className="img-fluid mb-3" />
                        {/* text */}
                        <div className="text-truncate">{item['title']}</div>
                      </div>
                    </div>
                  </Link>
                </div>)
              })}
          </div>
          {/* featured section */}
          <section className="my-lg-14">
            <div className="container">
              {/* row */}
              <div className="row">
                <div className="col-md-6 col-lg-3">
                  <div className="mb-8 mb-lg-0">
                    {/* img */}
                    <div className="mb-6"><img src="./shop/assets/images/icons/clock.svg" alt /></div>
                    {/* title */}
                    <h3 className="h5 mb-3">10 minute grocery now</h3>
                    {/* text */}
                    <p className="mb-0">Get your order delivered to your doorstep at the earliest from FreshCart pickup
                      stores near you.</p>
                  </div>
                </div>
                {/* col */}
                <div className="col-md-6 col-lg-3">
                  <div className="mb-8 mb-lg-0">
                    {/* img */}
                    <div className="mb-6"><img src="./shop/assets/images/icons/gift.svg" alt /></div>
                    {/* title */}
                    <h3 className="h5 mb-3">Best Prices &amp; Offers</h3>
                    {/* text */}
                    <p className="mb-0">Cheaper prices than your local supermarket, great cashback offers to top it off. Get
                      best pricess &amp; offers.</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="mb-8 mb-lg-0">
                    {/* img */}
                    <div className="mb-6"><img src="./shop/assets/images/icons/package.svg" alt /></div>
                    {/* title */}
                    <h3 className="h5 mb-3">Wide Assortment</h3>
                    {/* text */}
                    <p className="mb-0">Choose from 5000+ products across food, personal care, household, bakery, veg and
                      non-veg &amp; other categories.</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="mb-8 mb-lg-0">
                    {/* img */}
                    <div className="mb-6"><img src="./shop/assets/images/icons/refresh-cw.svg" alt /></div>
                    {/* title */}
                    <h3 className="h5 mb-3">Easy Returns</h3>
                    {/* text */}
                    <p className="mb-0">
                      Not satisfied with a product? Return it at the doorstep &amp; get a refund within hours. No
                      questions asked
                      <a href="#!">policy</a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />

    </div>)
  }
}
export default Home;