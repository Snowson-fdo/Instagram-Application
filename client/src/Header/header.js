import React from "react";
import logo from "../Images/logo.png"
import camera from "../Images/camera.png"
import { Link } from "react-router-dom"
import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="logo_text">
                <img className="logo" src={logo} alt="Loading..."/>
                <p className="text">Instaclone</p>
            </div>
            
            <div>
                <Link to="/post">
                    <img className="camera" src={camera} alt="click to post"/>
                </Link>  
            </div>
        </div>
    )
}