/* importing required react components */
import React from 'react';
import ReactDOM from 'react-dom/client';
class BillItem extends React.Component {
  constructor(props)
  {
      super(props);
      this.name = props.name;
      this.quantity = props.quantity;
      this.price = props.price;
      this.tax = props.tax;
      this.srno = props.srno;
      this.total=props.total;
  }
  render() {
    return (<tr>
      <td>{this.srno}</td>
      <td>{this.name}</td>
      <td>{this.price}</td>
      <td>{this.quantity}</td>
      <td>{this.tax}</td>
      <td>{this.total}</td>
      <td>
        <button type='button' class='btn btn-danger w-100'>Delete</button>
      </td>
    </tr>
    );
  }
}
class Bill extends React.Component {
  //create as many state variables as many inputs
  constructor(props)
  {
      super(props)
      //create state object
      this.state = {
        name:'',
        price:0,
        quantity:0,
        tax:0,
        total:0,
        items: []
      }
  }
  //create arrow function
  updateName = (userGivenInput) => {
    console.log(userGivenInput);
    this.setState({
      name:userGivenInput
    });
  }
  updatePrice = (userGivenInput) =>
  {
    this.setState({
      price:userGivenInput
    });
  }
  
  updateQuantity = (userGivenInput) =>
  {
    this.setState({
      quantity:userGivenInput
    });
  }
  
  updateTax = (userGivenInput) => 
  {
    this.setState({
      tax: userGivenInput
    });
  }

  addBillItem = (event) =>
  {
      event.preventDefault();
      let product = {
        name: this.state.name,
        price: parseInt(this.state.price), 
        quantity: parseInt(this.state.quantity),
        tax: ((this.state.price * this.state.quantity) * this.state.tax)/100,
        total: (this.state.price * this.state.quantity) + parseFloat(this.state.tax)
      }
      //add object into array 
      this.setState({
          items:[...this.state.items,product],
          name:'',
          price:'',
          quantity:''
      });
      console.log(this.state.items);
  }
  render() 
  {
    return (<div>
      <div className="container-fluid bg-light p-3">
        <div className="row">
          <div className="col-lg-3">
            <h3>Billing Software</h3>
          </div>
          <div className="col-lg-9">
            <form onSubmit={this.addBillItem} className="row row-cols-lg-auto g-3 align-items-center d-flex justify-content-end">
              <div className="col-12">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="name" placeholder="Product Name"
                  value={this.state.name} required
                  onChange={(event) => this.updateName(event.target.value)} />
                  <label htmlFor="name">Product Name</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating mb-3">
                  <input type="number" className="form-control" id="price" placeholder="Price" required
                  value={this.state.price}
                  onChange={(event) => this.updatePrice(event.target.value)} />
                  <label htmlFor="price">Price</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating mb-3">
                  <input type="number" className="form-control" id="Quantity" placeholder="Quantity" required
                  value={this.state.quantity}
                  onChange={(event) => this.updateQuantity(event.target.value)} />
                  <label htmlFor="Quantity">Quantity</label>
                </div>
              </div>
              <div className="col-12">
                <select required onChange={(event) => this.updateTax(event.target.value)} className="form-select" id="inlineFormSelectPref">
                  <option value='' selected>Choose Tax</option>
                  <option value={2.5}>Essitantial</option>
                  <option value={7.5}>Medium</option>
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
                  <thead>
                    <tr>
                      <th>Sr No</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Tax</th>
                      <th>Total</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody >
                    {this.state.items.map((product,index)=>{
                        return <BillItem srno={index+1} name={product.name} price={product.price} quantity={product.quantity} tax={product.tax} total={product.total} />
                    })}
                  </tbody>
                </table>
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