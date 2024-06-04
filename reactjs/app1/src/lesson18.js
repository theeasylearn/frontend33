/* importing required react components */
import React from 'react';
import ReactDOM from 'react-dom/client';

class FaceBookPost  extends React.Component
{
    constructor(props)
    {
        super(props);
        console.log('constructor is called....');
        this.updateLike = this.updateLike.bind(this);
        this.setComment= this.setComment.bind(this);
        this.addComment = this.addComment.bind(this);
        this.state = {
          isLiked: false,
          comment:'',
          messages:[]
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
    updateLike()
    {
        this.setState({
          isLiked: !this.state.isLiked
        });
    }
    setComment(event)
    {
        this.setState({
            comment:event.target.value
        });
    }
    addComment()
    {
        let temp = [...this.state.messages,this.state.comment];
        this.setState({
            messages:temp,
            comment:''
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
                   <button onClick={this.updateLike} type='button' className="btn btn-primary btn-sm">{(this.state.isLiked==false)?'Like':'Liked'}</button>
                 </span>
                 <p className="fw-bold border-bottom">Comments</p>
                {this.state.messages.map((item) => {
                    return <p className="m-0">{item}</p>
                })}                 
                             <textarea className="form-control" onChange={(event) => this.setComment(event)} value={this.state.comment} />
                 <button onClick={this.addComment} type='button' className="btn btn-primary btn-sm mt-1">Post</button>
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