import React from 'react' ;
import "../../assets/css/LogoutHeader.css"
import { Link } from 'react-router-dom';

const LogoutHeader = () => {
    return (
        <div className='header-container'>
            <h1>TECH TITAN <span>Admission Center</span></h1>
            <div className='menu-item'>
            </div>
            <div className='dropdown'>
            <button class="dropbtn">Login
                </button>
                <div class="dropdown-content">
                <Link to="/StudentLogin">Student Login</Link>
                <Link to="/AdminLogin">Admin Login</Link>
            </div>
            </div>
        </div>
    )
}

export default LogoutHeader ;