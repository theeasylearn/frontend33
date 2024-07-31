/* importing required react components */
import React from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
//create javascript object 
let person = {
    name:'Diya patel',
    dob: '2022-12-15',
    gender:false,
    photo: 'https://picsum.photos/200'
};
function getMaleFemale(gender)
{
    if(gender===true)
        return <>Male</>
    else 
        return <>Female</>
}
//create function components
function displayPerson(person)
{
    return (<div className='container'>
    <div className="row">
        <div className="col-3">
            <div className="card">
                <img src={person.photo} alt="" className="card-img-top" />
                <div className="card-body">
                    <h4>{person.name}</h4>
                    <hr />
                    BirthDate : {person.dob}
                    <br />
                    Gender : {getMaleFemale(person.gender)} 

                </div>
            </div>
        </div>
    </div>
</div>)
}
root.render(displayPerson(person));
