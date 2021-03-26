import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
const Welcome = () => {
    return (
        <div>
            <h1>Welcome</h1>
            <a href='/login'>login</a>
            {/* <BrowserRouter>
                <Link to='/login'>Login</Link>
            </BrowserRouter> */}
        </div>
    );
}

export default Welcome;
