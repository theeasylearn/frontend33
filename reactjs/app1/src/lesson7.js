/* importing required react components */
import React from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
//create functional Component 
function Page() {
    // responsive Menu
    // 4 products 
    // footer 
    return (<>
        {/* responsive menu  start */}
        <nav className="navbar navbar-expand-xl navbar-light bg-light shadow">
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
        </nav>
        
        {/* responsive menu end */}

        {/*  products start */}
        <div className="container mt-5">
            <div className="row">
                <div className="col-12">
                    <h2>Our Products</h2>
                </div>
                <div className="col-lg-3">
                    <div className="card">
                        <div className="card-header">
                            <h3>IPhone - 15</h3>
                        </div>
                        <div className="card-body">
                            <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex illo minus eaque quo natus repudiandae ullam debitis repellat quasi atque obcaecati, voluptas inventore eius modi.</p>
                            <a href="#" className="btn btn-primary">Add to cart</a>
                        </div>
                        <div className="card-footer text-muted">
                            Rs 125000
                        </div>
                    </div>

                </div>

                <div className="col-lg-3">
                    <div className="card">
                        <div className="card-header">
                            <h3>IPhone - 15</h3>
                        </div>
                        <div className="card-body">
                            <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex illo minus eaque quo natus repudiandae ullam debitis repellat quasi atque obcaecati, voluptas inventore eius modi.</p>
                            <a href="#" className="btn btn-primary">Add to cart</a>
                        </div>
                        <div className="card-footer text-muted">
                            Rs 125000
                        </div>
                    </div>

                </div>

                <div className="col-lg-3">
                    <div className="card">
                        <div className="card-header">
                            <h3>IPhone - 15</h3>
                        </div>
                        <div className="card-body">
                            <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex illo minus eaque quo natus repudiandae ullam debitis repellat quasi atque obcaecati, voluptas inventore eius modi.</p>
                            <a href="#" className="btn btn-primary">Add to cart</a>
                        </div>
                        <div className="card-footer text-muted">
                            Rs 125000
                        </div>
                    </div>

                </div>

                <div className="col-lg-3">
                    <div className="card">
                        <div className="card-header">
                            <h3>IPhone - 15</h3>
                        </div>
                        <div className="card-body">
                            <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex illo minus eaque quo natus repudiandae ullam debitis repellat quasi atque obcaecati, voluptas inventore eius modi.</p>
                            <a href="#" className="btn btn-primary">Add to cart</a>
                        </div>
                        <div className="card-footer text-muted">
                            Rs 125000
                        </div>
                    </div>

                </div>  
            </div>
        </div>
        {/*  products end */}

        {/* footer start */}
            <div className="container-fluid text-bg-dark mt-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <p>Developed By : Frontend 33 group</p>
                    </div>
                </div>
            </div>
        {/* footer end */}
    </>);
}
root.render(<Page />)