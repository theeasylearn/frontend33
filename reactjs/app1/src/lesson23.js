import React from 'react';
import ReactDOM from 'react-dom/client';
import './team.css';
const teamList = [
  {
    team: "Afghanistan",
    abbreviation: "AFG",
    group: "B"
  },
  {
    team: "Australia",
    abbreviation: "AUS",
    group: "A"
  },
  {
    team: "Bangladesh",
    abbreviation: "BAN",
    group: "B"
  },
  {
    team: "England",
    abbreviation: "ENG",
    group: "A"
  },
  {
    team: "India",
    abbreviation: "IND",
    group: "A"
  },
  {
    team: "Netherlands",
    abbreviation: "NED",
    group: "B"
  },
  {
    team: "New Zealand",
    abbreviation: "NZ",
    group: "A"
  },
  {
    team: "Pakistan",
    abbreviation: "PAK",
    group: "A"
  },
  {
    team: "South Africa",
    abbreviation: "SA",
    group: "B"
  },
  {
    team: "Sri Lanka",
    abbreviation: "SL",
    group: "B"
  },
  {
    team: "West Indies",
    abbreviation: "WI",
    group: "B"
  },
  {
    team: "Zimbabwe",
    abbreviation: "ZIM",
    group: "B"
  },
  {
    team: "Ireland",
    abbreviation: "IRE",
    group: "A"
  },
  {
    team: "Scotland",
    abbreviation: "SCO",
    group: "A"
  },
  {
    team: "Papua New Guinea",
    abbreviation: "PNG",
    group: "B"
  },
  {
    team: "United Arab Emirates",
    abbreviation: "UAE",
    group: "A"
  }
];
function Team(props) {
  var { team, abbreviation, group } = props.detail;
  return (
    <div className="col-lg-3">
      <table className='table-style'>
        <tr>
          <td className='td-style'>{team}</td>
        </tr>
        <tr>
          <td className='td-style'>{abbreviation}</td>
        </tr>
        <tr>
          <td className='td-style'>{group}</td>
        </tr>
      </table>
    </div>)
}
function ICCT20(props) {

  return (<div className="container">
    <div className="row">
      {teamList.map(function (item) {
        return <Team detail={item} />
      })}
    </div>
  </div>
  );

}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ICCT20 />)