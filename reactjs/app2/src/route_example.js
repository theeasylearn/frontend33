import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyService from './MyService'
let Home = () => <div><h1>Home</h1></div>
function Aboutus() {
    return (<div>
      <h1>About us</h1>
      <hr />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi labore necessitatibus autem tenetur expedita reprehenderit, temporibus quis aspernatur blanditiis animi eos nisi cumque recusandae quibusdam ullam quos quo, qui ducimus!</p>
    </div>)
}
function Product()
{
    return (<div>
      <h1>Products</h1>
      <hr />
      <ul>
        <li>IPhone</li>
        <li>IPad</li>
        <li>IPod</li>
        <li>Apple Watch</li>
        <li>Macbook</li>
      </ul>
    </div>);
}
class Contactus extends React.Component
{
    render()
    {
      return (<div>
        <h1>Contact us</h1>
        <hr />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni laboriosam sapiente delectus, temporibus hic beatae maiores? Repudiandae excepturi quidem ullam porro? Eveniet unde hic impedit suscipit temporibus quidem eaque veniam?</p>
      </div>)
    }
}

function Pagenotfound()
{
    return(<div>
      <h1>no such page exists.....</h1>
    </div>)
}
function MyRouter()
{
    return(<BrowserRouter>
        <Routes>
            <Route index path='/' element={<Home />} />
            <Route path='/aboutus' element={<Aboutus />} />
            <Route path='/contactus' element={<Contactus />} />
            <Route path='/product' element={<Product />} />
            <Route path='/service' element={<MyService />} />
            <Route path='*' element={<Pagenotfound />} />
        </Routes>
    </BrowserRouter>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyRouter />);
