import React from 'react'
import AdminHeader from './AdminHeader'
import SideBar from './AdminSideBar'
import '../../assets/css/AdminCss/AdminDashboard.css'
import { useState } from 'react'
import Chart from "react-apexcharts";
import AdminSideBar from './AdminSideBar'

const AdminDashboard = () => {
    const [state] = useState({
        options:
        {
              Chart:{
                    id: "basic-bar"
              },
              xaxis:{
                    categories: ["SKCT", "Anna University", "Kumaraguru" , "GCT", "PSG"]
              }
        },
        series:[
              {
                    name: "series-1",
                    data: [1000,2000,3000,4000,4000]
              }
        ]
       })
  return (
    <div className='admin-main-ins'>
      <div className="admincon">
        <AdminHeader/>
        <AdminSideBar/>
        <div className='adm-dash-maincon'>
            
        <section className="dashboard">
                   <h1>DASHBOARD</h1>
                 <div className="top">
                        <div className="first-panel">
                             <label className="cust">3500</label> 
                             <label className="cust-name">No. of. Institute</label> 
                        </div>
                        <div className="first-panel">
                     
                     
                     
                        <label className="cust">75</label> 
                             <label className="cust-name">No. of. Courses</label>
                        </div>
                        <div className="first-panel">
                        <label className="cust">14,000</label> 
                             <label className="cust-name">No. of. Site Visits</label> 
                        </div>
                  </div>
                        <div className="content">
                              <div className="chart">
                              <Chart className="chart1"
                              options={state.options}
                              series={state.series}
                              type='bar'
                              width="500"/>
                              <Chart className="chart2"
                              options={state.options}
                              series={state.series}
                              type="line"
                              width="600"
                              />
                              </div>
                              
                        </div>
            </section>

        </div>
      </div>
    </div>
  )
}

export default AdminDashboard