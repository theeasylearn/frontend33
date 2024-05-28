/* importing required react components */
import React from 'react';
import ReactDOM from 'react-dom/client';

class FaceBookPost  extends React.Component
{
    constructor(props)
    {
        super(props);
        console.log('constructor is called....');
        this.state = {
          label: 'Like'
        }
    }
    componentWillMount()
    {
        console.log('component will mount.');
    }
    componentDidMount()
    {
      console.log('component did mounted.');
    }
    updateLike = () =>
    {
        this.setState({
          label:'Liked'
        });
    }
    render()
    {
        console.log('render method is called.');
         return (<div className="container">
         <div className="row">
           <div className="col-lg-3">
             <div className="card">
               <img src="https://picsum.photos/200" alt className="card-img-top" />
               <div className="card-body">
                 <span className="d-flex justify-content-between">
                   <h5>Priya Mehta</h5>
                   <button onClick={this.updateLike} type='button' className="btn btn-primary btn-sm">{this.state.label}</button>
                 </span>
                 <p className="fw-bold border-bottom">Comments</p>
                 <p className="m-0">you clicked good photo.</p>
                 <p className="m-0">Awasome</p>
                 <textarea className="form-control" defaultValue={""} />
                 <button type='button' className="btn btn-primary btn-sm mt-1">Post</button>
               </div>
             </div>
           </div>
         </div>
       </div>
       );
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FaceBookPost />)