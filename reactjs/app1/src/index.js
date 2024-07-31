import React from 'react';
import ReactDOM from 'react-dom/client';
// to run this example first run below command in terminal 
//npm install  styled-components
//then start project and run this example

import styled from 'styled-components';
const Table = styled.table`
 background-color: gray;
    border: 2px solid yellow;
    color: white;
    width: 100%;
    font-size: 1.5rem;
    margin-bottom: 20px
`;

const Td = styled.td`
border: 2px solid white;
    text-align: center
`;

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
      <Table>
        <tr>
          <Td>{team}</Td>
        </tr>
        <tr>
          <Td>{abbreviation}</Td>
        </tr>
        <tr>
          <Td>{group}</Td>
        </tr>
      </Table>
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