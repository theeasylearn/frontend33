/* importing required react components */
import React from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
class CourseItem extends React.Component {
    constructor(props) {
        super(props); //compulsory
        //property variable
        this.name = props.name;
        this.price = props.price;
        this.photo = props.photo;
        // Replace single quotes with double quotes
        this.topics = props.topics.replace(/'/g, '"');
        //convert string into json array
        this.topics = JSON.parse(this.topics);

        console.log(this.topics);

    }
    render() {
        return (<div className="col-lg-3">
            <div className="card shadow">
                <img src={this.photo} alt="" className="card-img-top" />

                <div className="card-body">
                    <h3>{this.name}</h3>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>{this.topics[0]}</li>
                        <li className='list-group-item'>{this.topics[1]}</li>
                        <li className='list-group-item'>{this.topics[2]}</li>
                        <li className='list-group-item'>{this.topics[3]}</li>
                    </ul>
                </div>
                <div className="card-footer">
                    <h4>Fees :- {this.price}</h4>
                </div>
            </div>
        </div>
        )
    }
}
class Course extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-12">
                        <h1 className='pb-3 border-bottom'>Courses</h1>
                    </div>
                </div>
                <div className="row">
                    <CourseItem name='ABCD' price='14999' photo='https://picsum.photos/300'
                        topics="['ABCD topic 1','ABCD topic 2','ABCD topic 3']" />
                    <CourseItem name='XYZ' price='25999' photo='https://picsum.photos/300?random=2' topics="['XYZ topic 1','XYZ topic 2','XYZ topic 3','XYZ topic 4']" />
                    <CourseItem name='PQR' price='13999' photo='https://picsum.photos/300?random=3' topics="['PQR topic 1']" />
                    <CourseItem name='TER' price='99999' photo='https://picsum.photos/300?random=4' topics="['TER topic 1','TER topic 2']" />
                </div>
            </div>
        )
    }
}
root.render(<Course />)