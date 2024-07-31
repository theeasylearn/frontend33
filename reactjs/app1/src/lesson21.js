/* importing required react components */
import React from 'react';
import ReactDOM from 'react-dom/client';
const seats = [
  {
    "state": "Andhra Pradesh",
    "bjp_seats": 0
  },
  {
    "state": "Arunachal Pradesh",
    "bjp_seats": 2
  },
  {
    "state": "Assam",
    "bjp_seats": 9
  },
  {
    "state": "Bihar",
    "bjp_seats": 17
  },
  {
    "state": "Chhattisgarh",
    "bjp_seats": 9
  },
  {
    "state": "Goa",
    "bjp_seats": 2
  },
  {
    "state": "Gujarat",
    "bjp_seats": 26
  },
  {
    "state": "Haryana",
    "bjp_seats": 10
  },
  {
    "state": "Himachal Pradesh",
    "bjp_seats": 4
  },
  {
    "state": "Jharkhand",
    "bjp_seats": 11
  },
  {
    "state": "Karnataka",
    "bjp_seats": 25
  },
  {
    "state": "Kerala",
    "bjp_seats": 0
  },
  {
    "state": "Madhya Pradesh",
    "bjp_seats": 28
  },
  {
    "state": "Maharashtra",
    "bjp_seats": 23
  },
  {
    "state": "Manipur",
    "bjp_seats": 1
  },
  {
    "state": "Meghalaya",
    "bjp_seats": 0
  },
  {
    "state": "Mizoram",
    "bjp_seats": 0
  },
  {
    "state": "Nagaland",
    "bjp_seats": 0
  },
  {
    "state": "Odisha",
    "bjp_seats": 8
  },
  {
    "state": "Punjab",
    "bjp_seats": 2
  },
  {
    "state": "Rajasthan",
    "bjp_seats": 24
  },
  {
    "state": "Sikkim",
    "bjp_seats": 0
  },
  {
    "state": "Tamil Nadu",
    "bjp_seats": 0
  },
  {
    "state": "Telangana",
    "bjp_seats": 4
  },
  {
    "state": "Tripura",
    "bjp_seats": 2
  },
  {
    "state": "Uttar Pradesh",
    "bjp_seats": 62
  },
  {
    "state": "Uttarakhand",
    "bjp_seats": 5
  },
  {
    "state": "West Bengal",
    "bjp_seats": 18
  },
  {
    "state": "Andaman and Nicobar Islands",
    "bjp_seats": 1
  },
  {
    "state": "Chandigarh",
    "bjp_seats": 1
  },
  {
    "state": "Dadra and Nagar Haveli",
    "bjp_seats": 1
  },
  {
    "state": "Daman and Diu",
    "bjp_seats": 1
  },
  {
    "state": "Lakshadweep",
    "bjp_seats": 0
  },
  {
    "state": "Delhi",
    "bjp_seats": 7
  },
  {
    "state": "Puducherry",
    "bjp_seats": 0
  }
];
function SingleSeat(props)
{
  console.log(props)
  return (<li key={props.key} className="list-group-item d-flex justify-content-between"><span>{props.position}) {props.seat.state}</span> <span className="badge bg-primary">{props.seat.bjp_seats}</span></li>);
}
function ElectionResult(props)
{
  return (<div className="container">
    <div className="row">
      <div className="col-lg-3">
        <ol className="list-group">
            {props.seats.map(function(current,index){
                return (<SingleSeat position={index+1} key={index} seat={current} />)
            })}
        </ol>
      </div>
    </div>
  </div>
);

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ElectionResult seats={seats} />)