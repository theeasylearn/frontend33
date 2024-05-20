/* importing required react components */
import React from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
class CourseItem extends React.Component {
    constructor(props)
    {
        super(props); //compulsory
        this.name = props.name;
        this.price = props.price;
        this.photo = props.photo;
    }
    render() {
        return (<div className="col-lg-3">
            <div className="card shadow">
                <img src={this.photo} alt="" className="card-img-top" />

                <div className="card-body">
                    <h3>{this.name}</h3>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>Topic 1</li>
                        <li className='list-group-item'>Topic 2</li>
                        <li className='list-group-item'>Topic 3</li>
                        <li className='list-group-item'>Topic 4</li>
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
                    <CourseItem name='ABCD' price='14999' photo='https://picsum.photos/300' />
                    <CourseItem name='XYZ' price='25999' photo='https://picsum.photos/300?random=2' />
                    <CourseItem name='PQR' price='13999' photo='https://picsum.photos/300?random=3' />
                    <CourseItem name='TER' price='99999' photo='https://picsum.photos/300?random=4' />
                </div>
            </div>
        )
    }
}
root.render(<Course />)