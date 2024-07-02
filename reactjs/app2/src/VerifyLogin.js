import {useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";
export default function VerifyLogin()
{
    let [cookies, setCookie, removeCookie] = useCookies(['theeasylearn']);
    let navigate = useNavigate();
    if (cookies['userid'] === undefined) {
        navigate("/");
    }
}