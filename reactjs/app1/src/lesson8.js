/* importing required react components */
import React from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
//create functional Component 
function SiteHeader() {
    return (<nav className="navbar navbar-expand-xl navbar-light bg-light shadow">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">The easylearn academy</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarBasic" aria-controls="navbarBasic" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse show" id="navbarBasic">
                <ul className="navbar-nav me-auto mb-2 mb-xl-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>

                </ul>

            </div>
        </div>
    </nav>);
}
function SiteFooter() {
    return (<div className="container-fluid text-bg-dark mt-5">
        <div className="row">
            <div className="col-12 text-center">
                <p>Developed By : Frontend 33 group</p>
            </div>
        </div>
    </div>);
}
function Product(props)
{
    return ( <div className="col-lg-3">
    <div className="card">
        <div className="card-header text-bg-primary">
            <h3>{props.name}</h3>
        </div>
        <div className="card-body">
            <p className="card-text">{props.detail}</p>
            <a href="#" className="btn btn-primary w-100">Add to cart</a>
        </div>
        <div className="card-footer text-muted fw-bold">
            Rs {props.price}
        </div>
    </div>

</div>)
}
function Page() {
    // responsive Menu
    // 4 products 
    // footer 
    return (<>
        {/* responsive menu  start */}
        <SiteHeader />
        {/* responsive menu end */}

        {/*  products start */}
        <div className="container mt-5">
            <div className="row">
                <div className="col-12">
                    <h2>Our Products</h2>
                </div>
                <Product name='IPhone' price='125000' detail='it IPhone' />
                <Product name='MacBook air' price='201500' detail='its macbook air laptop ' />
                <Product name='Apple TV' price='189000' detail='it is apple tv' />
                <Product name='airpod' price='35211' detail='it is music related intrument' />
           </div>
        </div>
        {/*  products end */}

        {/* footer start */}
        <SiteFooter />
        {/* footer end */}
    </>);
}
root.render(<Page />)