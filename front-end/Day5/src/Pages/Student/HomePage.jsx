import "../../assets/css/HomePage.css"
import StudentHeader from './StudentHeader';
import home_back from '../../assets/videos/4.mp4'
import LogoutHeader from './LogoutHeader';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



const HomePage = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d4aqnaq",
        "template_bmd5t4f",
        form.current,
        "z6FAwwy1Z52xHFrvl"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
    const navigate = useNavigate() ;
    function handleExplore()
    {
        navigate("/StudentLogin")
    }
    return (
        <div>
            <div className="header-student">
                <LogoutHeader/>
            </div>
            <div className="home-container">
                <video src={home_back} alt="" autoPlay loop muted/>
                <div className="home-content">
                    <h1>Every Success is usally an admission ticket to a new seat of decisions!!</h1>
                    <p>Coming back after a break is never easy. After a fun-filled vacation, students may feel a little lazy. They might not be excited to submit to a daily schedule again, signifying a new academic year. When students return to school or college to attend a new year or semester, it is important to help them feel welcomed back. Feeling welcomed can help them get into the swing of things. One great way to get back into the school mindset is with a welcome message to students.
                    </p>
                    {/* <p>Our portal serves as your gateway to exploring endless opportunities for academic excellence, personal development, and community engagement. </p> */}
                    <div className='ex-div'>
                    <button onClick={handleExplore}>Explore</button>
                    </div>
                </div>
            </div>
            <div className='home-middle'>
                <h1 className='head-middle'>Our Contribution</h1>
                <p>Welcome to our college admission portal, your gateway to a world of educational opportunities! Here, we showcase the collective contributions of colleges nationwide, offering students a comprehensive platform to explore their academic futures. Our portal stands out for three key reasons:</p>
                <div className='card-home'>
                    <div className="card1">
                        <h1>Extensive Diversity of Options</h1>
                        <p>With a vast array of colleges and universities participating in our portal, students have unparalleled access to diverse educational options. Whether you're interested in large research universities, small liberal arts colleges, specialized institutions, or community colleges, you'll find a wide range of choices to suit your preferences, interests, and career goals.</p>
                    </div>
                    <div className="card2">
                        <h1>Streamlined Application Process</h1>
                        <p>We understand that the college application process can be daunting, which is why we've streamlined it to make it as efficient and user-friendly as possible. Through our portal, students can submit a single application to multiple colleges, saving time and reducing paperwork. Our intuitive interface guides students through each step of the application process.</p>
                    </div>
                    <div className="card3">
                        <h1>Comprehensive Resources</h1>
                        <p> Navigating the college admission journey can be complex, but our portal is here to provide comprehensive resources and support every step of the way. Whether you have questions about financial aid, admissions requirements, campus life, or academic programs, our platform offers a wealth of information to help you make informed decisions. </p>
                    </div>
                </div>

            </div>  
            <div className='contact-us'>
                <h1>CONTACT US</h1>
                <p>Have questions or feedback? We'd love to hear from you! Reach out through the form</p>
                <form ref={form} onSubmit={sendEmail}>
                <input type="text" className="user_name" placeholder="Name"/>
                <input type="email" className="user_email" placeholder="Email"/>
                <input type="text" placeholder="Subject"/>
                <textarea id="" cols="30" rows="10" name="message" placeholder="Message"/>
                <button type="submit">Submit</button>
    </form>
            </div>
            <div className="footer-main">
                <div className="footer-sec">
                    <div className="section1">
                        <h1>About Us</h1>
                        <p>Welcome to the Admission Portal for Colleges. We're dedicated to simplifying the college admissions process for students worldwide. Our mission is to empower you with easy access to information, resources, and support to navigate your journey successfully.</p>
                    </div>
                    <div className="section2">
                        <h1>Navigations</h1>
                        <Link className='link-footer'>Institutes</Link>
                        <Link className='link-footer'>Courses</Link>
                        <Link className='link-footer'>Student Details</Link>
                        <Link className='link-footer'>Status</Link>
                        <Link className='link-footer'>Payment</Link>
                        <Link className='link-footer'>Payment History</Link>
                    </div>
                    <div className="section3">

                        <h1>Contact Us</h1>
                        <p>Coimbatore, TamilNadu</p>
                        <p>techtitanadmission@gmail.com</p>
                        <p>+(92)293039485</p>
                        <p>+(92)384755738</p>
                    </div>
                    <div className="section4">

                        <h1>UseFul Link</h1>
                        <div className='ico'>
                            <p><FaFacebook /></p>
                            <Link className='link-footer'>www.facebook.com/techtitansadmission</Link>
                        </div>
                        <div className='ico'>
                            <p><FaInstagram /></p>
                            <Link className='link-footer'>www.instagram.com/techtitansadmission</Link>
                        </div>
                        <div className="ico">
                            <p><FaLinkedin /></p>
                            <Link className='link-footer'>www.linkedin.com/techtitansadmission</Link>
                        </div>
                        <div className="ico">
                            <p><FaTwitter /></p>
                            <Link className='link-footer'>www.twitter.com/techtitansadmission</Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage