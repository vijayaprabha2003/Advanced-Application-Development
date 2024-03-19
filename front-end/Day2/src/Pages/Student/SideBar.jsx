import React from 'react'
import "../../assets/css/SideBar.css"
import { Link, useNavigate } from 'react-router-dom';

const SideBar = () => {
    //const navigate = useNavigate() ;
    return (
        <div className="sidebar-container">
            <nav>
            
            <div className="menu-items">
            <ul className="nav-links">
                        <li>
                              <Link className='link-text' to="/studentViewInstitute">
                                    View Institute
                              </Link>
                        </li>
                        <li>
                              <Link className='link-text' to="/studentViewCourse">
                                    <span className='link-name'>View Courses</span>
                              </Link>
                        </li>
                  
                        <li>
                              <Link className='link-text' to="/studentAddStudentDetails">
                                    <span className='link-name'>Add Student Details</span>
                              </Link>
                        </li>
                        <li>
                              <Link className='link-text' to="/studentCheckAdmission">
                                    <span className='link-name'>Check Admission Status</span>
                              </Link>
                        </li>
                        <li>
                              <Link className='link-text' to="/studentMakePayment">
                                    <span className='link-name'>Make Payment</span>
                              </Link>
                        </li>
                        <li>
                              <Link className='link-text' to="/studentPaymentHistory">
                                    <span className='link-name'>Payment History</span>
                              </Link>
                        </li>
                  </ul>
            </div>
        </nav>
        </div>
    )
}

export default SideBar ;