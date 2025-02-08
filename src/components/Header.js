import logo from "../../Assets/logo.png";
import {useState} from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import React from "react";

const Header = () =>{

    const[btnName,setbtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    return(
        <div className="header">

            <div className="logo-container">
                <img className="logo" src={logo} />
            </div>

            <div className="nav-items">
                <ul>
                    <li> Online status:{onlineStatus?"👍":"📍"}</li>
                    <li><Link to="/">Home</Link></li>
                    {/* link without refresh */}
                    <li><Link to="/About">About</Link></li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>

            <button className="login" onClick={()=>{ 
                btnName === "Login"?setbtnName("logOut"):setbtnName("Login"); 
            }}>
              {btnName}
            </button>



        </div>
    );
};

export default Header;