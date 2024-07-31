import { useEffect } from 'react';
import { withCookies, useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

function Logout()
{
    //create cookies related array & functions 
    let [cookies, setCookie, removeCookie] = useCookies(['theeasylearn']);
    let navigate = useNavigate();
    useEffect(() =>{
        //code to remove cookie
        removeCookie('userid');
        navigate("/");
    })
    return(<></>)
}
export default withCookies(Logout);