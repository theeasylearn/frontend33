import React, { useEffect } from "react";
import withHooks from "./myhooks";

//logout is function component created using arrow function technique
let Logout = ({ navigate, removeCookie }) => {
    useEffect(() => {
        removeCookie("userid");
        removeCookie("email");
        navigate("/");
    }, [navigate, removeCookie]);

    return null;
};
export default withHooks(Logout);
