import React from 'react'
import StudentHeader from './StudentHeader'
import SideBar from './SideBar'
import "../../assets/css/MakePayment.css"

const MakePayment = () => {
  return (
    <div>
    <StudentHeader/>  
    <div className='pay-main'>
      
      <div className="studentins-main">
      <h1>Course Payment</h1>
        <div className="form-adm">
            <div className="firsthalf">
                <input type="text" name="stname" placeholder='Student Id' />
                <input type="text" name="stname" placeholder="Course Id" />
                <input type="text" name="stname" placeholder="Total Amount" />
                <select type="text" name="stname" placeholder='Mode of Payment'>
                  <option value="payment">Mode Of Payment</option>
                  <option value="gpay">GPay</option>
                  <option value="Paytm">Paytm</option>
                  <option value="NetBanking">Net Banking</option>
                </select>
                <input type="text" name="stname" placeholder='Payment Date' />
            </div>
            <div className="enr">
              <button className="enrollbut">
                Enroll
              </button>
            </div>
          </div>
      </div>
    </div>
    </div>
  )
}

export default MakePayment
