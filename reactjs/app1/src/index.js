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
    return ( <div className="col-lg-3 mb-2">
    <div className="card">
        <div className="card-header text-bg-primary">
            <h5>{props.name}</h5>
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
    let products = [
        {'name':'Samsung Galaxy S21','price':799,'detail':'Flagship smartphone with Snapdragon 888 processor and triple-camera system.'},
        {'name':'Sony WH-1000XM4','price':349,'detail':'Wireless noise-canceling headphones with 30 hours of battery life.'},
        {'name':'Apple iPad Pro','price':999,'detail':'12.9-inch tablet with M1 chip and Liquid Retina XDR display.'},
        {'name':'Google Pixel 6','price':699,'detail':'Smartphone with Google Tensor processor and advanced camera features.'},
        {'name':'Microsoft Surface Pro 8','price':1099,'detail':'2-in-1 laptop with Intel Evo platform and 13-inch touchscreen.'},
        {'name':'Bose QuietComfort 35 II','price':299,'detail':'Wireless noise-canceling headphones with Alexa voice control.'},
        {'name':'Fitbit Charge 5','price':179,'detail':'Advanced fitness and health tracker with built-in GPS and stress management tools.'},
        {'name':'Amazon Echo Dot','price':49,'detail':'Smart speaker with Alexa voice assistant and compact design.'},
        {'name':'Roku Streaming Stick+','price':49,'detail':'4K streaming device with HDR support and voice remote.'},
        {'name':'HP Spectre x360','price':1199,'detail':'Convertible 2-in-1 laptop with Intel Core i7 and 4K touchscreen.'},
        {'name':'Logitech MX Master 3','price':99,'detail':'Advanced wireless mouse with ergonomic design and custom controls.'},
        {'name':'Nikon D3500','price':499,'detail':'Entry-level DSLR camera with 24.2MP sensor and easy-to-use interface.'},
        {'name':'Anker PowerCore 10000','price':29,'detail':'Compact portable charger with 10000mAh capacity and fast charging.'},
        {'name':'Sony PlayStation 5','price':499,'detail':'Next-gen gaming console with 4K gaming and ultra-high-speed SSD.'},
        {'name':'Apple Watch Series 7','price':399,'detail':'Smartwatch with larger display, health tracking, and fast charging.'},
        {'name':'Jabra Elite 75t','price':179,'detail':'True wireless earbuds with active noise cancellation and long battery life.'},
        {'name':'Canon EOS R6','price':2499,'detail':'Full-frame mirrorless camera with 20MP sensor and 4K video recording.'},
        {'name':'DJI Mavic Air 2','price':799,'detail':'Compact drone with 48MP camera, 4K video, and 34-minute flight time.'},
        {'name':'Oculus Quest 2','price':299,'detail':'All-in-one VR headset with 64GB storage and intuitive controls.'},
        {'name':'Samsung Galaxy Tab S7','price':649,'detail':'11-inch Android tablet with Snapdragon 865+ and S Pen included.'},
        {'name':'Garmin Fenix 6','price':599,'detail':'Multisport GPS smartwatch with advanced fitness tracking and mapping.'},
        {'name':'Kindle Paperwhite','price':129,'detail':'E-reader with high-resolution display and adjustable front light.'},
        {'name':'GoPro HERO9 Black','price':399,'detail':'Action camera with 5K video recording and front display.'},
        {'name':'Dyson V11 Torque Drive','price':599,'detail':'Cordless vacuum cleaner with powerful suction and LCD screen.'},
        {'name':'NVIDIA GeForce RTX 3080','price':699,'detail':'High-performance graphics card for gaming and creative applications.'},
        {'name':'Apple AirPods Pro','price':249,'detail':'True wireless earbuds with active noise cancellation and transparency mode.'},
        {'name':'Tile Mate','price':24,'detail':'Bluetooth tracker to help you find lost items with your phone.'},
        {'name':'Philips Hue Starter Kit','price':199,'detail':'Smart lighting system with color-changing bulbs and app control.'},
        {'name':'Instant Pot Duo 7-in-1','price':89,'detail':'Multi-functional pressure cooker with 7 cooking functions.'},
        {'name':'Ring Video Doorbell 3','price':199,'detail':'Smart doorbell with HD video, motion detection, and two-way talk.'},
        {'name':'Nest Learning Thermostat','price':249,'detail':'Smart thermostat that learns your schedule and saves energy.'}
    ];
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
            {products.map(function(item){
               return <Product name={item.name} price={item.price} detail={item.detail} />
            })}
           </div>
        </div>
        {/*  products end */}

        {/* footer start */}
        <SiteFooter />
        {/* footer end */}
    </>);
}
root.render(<Page />)