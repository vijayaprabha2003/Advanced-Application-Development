import React, { useState } from 'react'
import '../assets/css/LoginPage.css'
import { useNavigate } from 'react-router-dom';
import { login } from './UserSlice';
import { useDispatch } from 'react-redux';
import { useUser } from './UserContext';

const StudentLoginPage = () => {
  const { login: userLogin } = useUser();
  const [email, setEmail] = useState("") ;
  const [password,setPassword] = useState("");
  function off ()
  {
    const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
  }
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSign = (e) => {
    e.preventDefault() ;
    if(email === "student@gmail.com" && password == "12345")
    {
      alert("Logged in");
      userLogin();
    dispatch(login({ email: email, password : password }));
      navigate("/studentViewInstitute") ;
    }
    else{
      alert("Enter the correct details") ;
    }
  }
  return (
    <div class="container">
      <div class="forms-container">
        <div class="signin-signup">
          <form action="#" class="sign-in-form">
            <h2 class="title">Sign in</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Email" name={email} value={email}onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" name={password} value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button onClick={(e) => handleSign(e)}>Sign In</button>
            
          </form>
          <form action="#" class="sign-up-form">
            <h2 class="title">Sign up</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div class="input-field">
              <i class="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" class="btn" value="Sign up" />
            
          </form>
        </div>
      </div>

      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>Welcome User you are ready to explore your Research!!!🙌</h3>
            <p>
              Join with us and explore more and more..By clicking SignUp!!!👇
            </p>
            <button class="btn transparent" id="sign-up-btn"  onClick={off}>
              Sign up
            </button>
          </div>
          <img src="img/log.svg" class="image" alt="" />
        </div>
        <div class="panel right-panel">
          <div class="content">
            <h3>“Let us remember: One book, one pen, one child, and one teacher can change the world."🎓</h3>
            <p>
              Welcome new User, here is your Signin...click here!!!!
            </p>
            <button class="btn transparent" id="sign-in-btn" onClick={off}>
              Sign in
            </button>
          </div>
          <img src="img/register.svg" class="image" alt="" />
        </div>
      </div>
    </div>

  )
}

export default StudentLoginPage