import React from 'react'
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import HomePage from './Pages/Student/HomePage'



import GetAdmission from './Pages/Student/GetAdmission'
import MakePayment from './Pages/Student/MakePayment'
import PaymentHistory from './Pages/Student/PaymentHistory'
import ViewCourse from './Pages/Student/ViewCourse'
import ViewInstitute from './Pages/Student/ViewInstitute'
import AddStudentDetails from './Pages/Student/AddStudentDetails'
import CheckAdmission from './Pages/Student/CheckAdmission'

import AddInstitute from './Pages/Admin/AddInstitute'
import AddCourse from './Pages/Admin/AddCourse'
import ViewAdmissionList from './Pages/Admin/ViewAdmissionList'
import ViewPayment from './Pages/Admin/ViewPayment'
import ViewStudentList from './Pages/Admin/ViewStudentList'
import ViewIns from './Pages/Admin/ViewIns'
import ViewCou from './Pages/Admin/ViewCou'
import StudentLoginPage from './Pages/StudentLoginPage'
import AdminLoginPage from './Pages/AdminLoginPage'

import { useUser } from './Pages/UserContext'
import { UserProvider } from './Pages/UserContext'
import AdminDashboard from './Pages/Admin/AdminDashboard'

function App() {
  const PrivateRoute = ({ children }) => {
    const { isUserLoggedIn } = useUser();
    return isUserLoggedIn ? children : <Navigate to="/" replace />;
};
  return (
    <>
      <div>
        <UserProvider>
        <Router>
          <Routes>
            <Route path='/StudentLogin' element={<StudentLoginPage/>}></Route>
            <Route path='/AdminLogin' element={<AdminLoginPage/>}></Route>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/studentAddStudentDetails' element={<AddStudentDetails/>}></Route>
            <Route path='/studentGetAdmission' element={<GetAdmission/>}></Route>
            <Route path='/studentCheckAdmission' element={<CheckAdmission/>}></Route>
            <Route path='/studentMakePayment' element={<MakePayment/>}></Route>
            <Route path='/studentPaymentHistory' element={<PaymentHistory/>}></Route>
            <Route path='/studentViewCourse' element={<ViewCourse/>}></Route>
            <Route path='/studentViewInstitute' element={<ViewInstitute/>}></Route>
            <Route path='/adminAddInstitute' element={<AddInstitute/>}></Route>
            <Route path='/adminViewIns' element={<ViewIns/>}></Route>

            <Route path='/adminAddCourse' element={<AddCourse/>}></Route>
            <Route path='/adminViewCou' element={<ViewCou/>}></Route>
            <Route path='/adminViewAdmissionList' element={<ViewAdmissionList/>}></Route>
            <Route path='/adminViewPayment' element={<ViewPayment/>}></Route>
            <Route path='/adminViewStudentList' element={<ViewStudentList/>}></Route>
            <Route path='/adminDashboard' element={<AdminDashboard/>}></Route>

            {/*ERROR PAGE*/}
            <Route path='*' element={<h1 style={{textAlign:"center",display:"flex",width:"100%",height:"100vh",justifyContent:"center",alignItems:"center"}}>404 Page Not Found</h1>}></Route>
            
          </Routes>
        </Router>
        </UserProvider>
      </div>
    </>
  )
}

export default App
