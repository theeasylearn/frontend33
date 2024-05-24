/* importing required react components */
import React from 'react';
import ReactDOM from 'react-dom/client';
class Bill extends React.Component
{
    render()
    {
        return (<div>
            <div className="container-fluid bg-light p-3">
              <div className="row">
                <div className="col-lg-3">
                  <h3>Billing Software</h3>
                </div>
                <div className="col-lg-9">
                  <form className="row row-cols-lg-auto g-3 align-items-center d-flex justify-content-end">
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="name" placeholder="Product Name" />
                        <label htmlFor="name">Product Name</label>
                      </div>   
                    </div>
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input type="number" className="form-control" id="price" placeholder="Price" />
                        <label htmlFor="price">Price</label>
                      </div>   
                    </div>
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input type="number" className="form-control" id="Quantity" placeholder="Quantity" />
                        <label htmlFor="Quantity">Quantity</label>
                      </div>   
                    </div>
                    <div className="col-12">
                      <label className="visually-hidden" htmlFor="inlineFormSelectPref">Preference</label>
                      <select className="form-select" id="inlineFormSelectPref">
                        <option selected>Choose...</option>
                        <option value="2.5">Essitantial</option>
                        <option value="7.5">Medium</option>
                        <option value={20}>Luxary</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary">Add</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="container mt-3">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header text-bg-primary">
                      <h4>Bill Items</h4>
                    </div>
                    <div className="card-body">
                      <table className="table table-striped table-sm">
                        <tbody><tr>
                            <th>Sr No</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Tax Rate</th>
                            <th>Total</th>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>Waffer</td>
                            <td>10</td>
                            <td>5</td>
                            <td>2.5</td>
                            <td>52.50</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Biscuit</td>
                            <td>20</td>
                            <td>5</td>
                            <td>2.5</td>
                            <td>102.50</td>
                          </tr>
                        </tbody></table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          );
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Bill />)