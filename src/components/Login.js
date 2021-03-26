import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";


const Login = () => {
    return (
        <div>
            Login
            <a href='/lists' >Lists</a>
            {/* <BrowserRouter>
                <Link to='/lists'>Lists</Link>
            </BrowserRouter> */}
        </div>
    );
}

export default Login;
