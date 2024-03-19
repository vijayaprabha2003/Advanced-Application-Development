import React from 'react'
import '../../assets/css/AdminCss/ViewAdmissionList.css'
import AdminHeader from './AdminHeader'
import SideBar from './AdminSideBar'
import '../../assets/css/AdminCss/ViewAdmissionList.css'
import student_details from '../../assets/others/Studentstatus'
import AdminSideBar from './AdminSideBar'

const ViewAdmissionList = () => {
  const student = student_details.map((items) =>
        <tbody>
          <tr>
            <td>{items.admission_id}</td>
            <td>{items.studentname}</td>
            <td>{items.coursename}</td>
            <td>{items.institute_name}</td>
            <td>{items.status}</td>
            <div className='tab-but'>
              <button>ACCEPT</button>
              <button>REJECT</button>
            </div>
          </tr>
        </tbody>
  );
  return (
    <div className='admin-main-ins'>
      <div className="admincon">
        <AdminHeader/>
        <AdminSideBar/>
        <div className='adm-adlist-maincon-view'>
        <table className='adm-adlist-content-table'>
            <thead>
              <tr>
                <th>ADMISSION ID</th>
                <th>STUDENT NAME</th>
                <th>COURSE NAME</th>
                <th>INSTITUTION NAME</th>
                <th>STATUS</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            {student}
            </table>
        </div>
      </div>
    </div>
  )
}

export default ViewAdmissionList
