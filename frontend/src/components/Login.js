import React, { useState } from "react";
import "./login.css";

const Login = () => {
    // const[popupStyle,showPopup] = useState("hide");

    // const popup = () => {
    //     showPopup("login-popup")
    //     setTimeout(() => { showPopup("hide"), 3000});
    // }

    return (
        <div className="cover">
            <h1>Login</h1>
            <input type="text" placeholder="Enter your username" />
            
            <input type="password" placeholder="Enter your Password" />

            <div className="login-btn">
            {/* onClick={popup} */}
                Login
            </div>

            <p className="text">Or login using</p>

            <div className="alt-login">
                <div className="facebook"></div>
                <div className="google"></div>
            </div>

            {/* <div className="popupStyle">
                <h3>Username or Password incorrect</h3>
            </div> */}
        </div>

        
    )
}

export default Login;

