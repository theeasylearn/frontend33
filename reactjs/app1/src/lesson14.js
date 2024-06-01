/* importing required react components */
import React from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
class DinningTable extends React.Component {
    constructor(props)
    {
        super(props);
        //property variable
        this.guest = props.guest;
        this.no = props.no;
        //create state object
        this.state = {
            thali:1,
            ras:2,
            papad:3,
            roti:4,
            chas:5,
            total:1000
        }
    }
    render() {
        return (<div className="col-lg-3 mb-3">
            <div className="card shadow">
                <div className="card-header d-flex justify-content-between text-bg-primary">
                    <h5>{this.guest}</h5>
                    <span className="badge text-bg-secondary">{this.no}</span>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-12 mb-2">
                            <button type="button" className="btn btn-primary w-100">Thali <span className="badge text-bg-secondary">{this.state.thali}</span></button>
                        </div>
                        <div className="col-6 mb-2">
                            <button type="button" className="w-100 btn btn-warning">Ras <span className="badge text-bg-secondary">{this.state.ras}</span></button>
                        </div>
                        <div className="col-6 mb-2">
                            <button type="button" className="w-100 btn btn-light">Roti <span className="badge text-bg-secondary">{this.state.roti}</span></button>
                        </div>
                        <div className="col-6 mb-2">
                            <button type="button" className="w-100 btn btn-info">Papad <span className="badge text-bg-secondary">{this.state.papad}</span></button>
                        </div>
                        <div className="col-6 mb-2">
                            <button type="button" className="w-100 btn btn-success">Chas <span className="badge text-bg-secondary">{this.state.chas}</span></button>
                        </div>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <h6>Total Rs </h6>
                    <h6 className="fw-bold">{this.state.total}</h6>
                </div>
            </div>
        </div>);
    }
}
class Resturant extends React.Component {
    render() {
        return (<div className="container">
            <div className="row">
                <DinningTable guest='Jeet Patel' no='1' />
                <DinningTable guest='Ram Patel' no='2' />
                <DinningTable guest='Geeta Patel' no='3' />
            </div>
        </div>
        );
    }
}
root.render(<Resturant />)