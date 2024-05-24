import React from "react";
import DinningTable from './DinningTable';
export default class Resturant extends React.Component {
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