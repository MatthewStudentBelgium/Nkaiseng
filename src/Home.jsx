import React from "react";
import "./Home.css";
import pfp from "./assets/nkai.jpg";
import bcIcon from "./assets/bc.jpeg";
import fnbIcon from "./assets/fnb.png"
import "@fortawesome/fontawesome-free/css/all.min.css";
import Theme from "./Theme.jsx";
import { useEffect, useState } from "react";


function Home() {

    //Allows the top nav to transition to the side-bar nav
    //THis tracks if the sidebar is active or not
 const [sidebarMode, setSidebarMode] = useState(false);

  useEffect(() => {
    //function runs everytime the user scrolls
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      const triggerPoint = aboutSection.offsetTop - 100;
      setSidebarMode(window.scrollY >= triggerPoint);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
     document.documentElement.style.scrollBehavior = "smooth";
  }, []);


  return (
    <div className="container">
    <div className="home-container">
      {/* Left Side */}
      <div className="left-section">
        <h3 className="cv-title">Curriculum Vitae</h3>
        <img src={pfp} alt="profile" className="pfp" />
        <p className="role">Software Developer</p>
        

        <div className="icons">
          <a
            href="https://www.linkedin.com/in/nkaiseng-jakobo-403870331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>

          <a
            href="https://github.com/NkaisengJ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>

      {/* Right Side */}
      
      <div className="right-section">
        <div className={`home-container ${sidebarMode ? "sidebar-active" : ""}`}>
        
       

        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#qualifications">Qualifications</a>
          <a href="#contact">Contact</a>
        </nav>

        <Theme /> 
        
        {/*Home Section*/}

           <section id="home" className="home-section">
         <div className="intro">
          <p>Hello I’m</p>
          <h1>
            <span className="name">Nkaiseng Jakobo</span>
          </h1>
          <p className="job-title">Fullstack Software Developer</p>

          <div className="buttons">
            <button
              className="btn hire"
              onClick={() =>
                alert(
                  "Thank you so much for your interest! Please find my contact info."
                )
              }
            >
              Hire Me
            </button>

            <button
              className="btn cv"
              onClick={() => window.open("/Curriculum Vitae.pdf", "_blank")}
            >
              View CV
            </button>
            </div>
             </div>
            
            </section>
             </div>

              </div>
            

       {/*About section */}

       <section id="about" className="about-section"> 
     
       
        <aside className="sidebar">
        <div className="pfp-about">
            <img src= {pfp} alt="pfp1" />

        </div>

        </aside>

       
         
        <div className="about-content">
        <h1 className="about-title">Cirriculum Vitae</h1>
        <div className="about-card">
        <h2 className="section-title">About Me</h2>
        <p>
             I am an aspiring software developer with a solid foundation in web
              application development using C# and Python. Having a strong
              interest in UI and UX design enables me to create applications
              that are both efficient and user-focused. I am seeking
              opportunities to apply my technical skills and continue growing
              within a professional development environment.
        </p>

        <h3 className="sub-title" > My Services </h3>
        <div className="services">

         <div className="service-item">User Interface Design</div>
         <div className="service-item">Software Testing</div>
         <div className="service-item">Data Input & Processing</div>

        </div>
        </div>

 
        </div>
         </section>
         </div>

         {/*Qualification Section*/}

          <section id="qualifications" className="qualifications-section">
        

         <h2 className="qual-title">Education</h2>

         <div className="edu-card">
         <img src={bcIcon} alt="BC" className="edu-logo"/>
          <h3>Belgium Campus </h3>
          <p>2022 - Present</p>
         </div>

         <div className="edu-card">
        <img src={fnbIcon} alt="BC" className="edu-logo"/>
        <h3>FNB App Academy</h3>
        <p>2025</p>
        <button className="btn small" onClick={() => window.open("/Nkaisengss.pdf", "_blank")}
        > View Certificate </button>

         </div>

        <h3 className="sub-title"> My Technical Skills </h3>
        <div className="skill-bar">
            <label>React</label>
            <input type="range" min="0" max="100" value="60" readOnly/>
            <label>JavaScript</label>
            <input type="range" min="0" max="100" value="50" readOnly/>
            <label>C++</label>
            <input type="range" min="0" max="100" value="90" readOnly/>
            <label>Python</label>
            <input type="range" min="0" max="100" value="60" readOnly/>
            <label>Java</label>
            <input type="range" min="0" max="100" value="60" readOnly/>
            <label>WordPress</label>
            <input type="range" min="0" max="100" value="60" readOnly/>
            <label>Figma</label>
            <input type="range" min="0" max="100" value="70" readOnly/>


        </div>

        <h3 className="sub-title" > My Projects </h3>
        <div className="services">

         <div className="service-item">Library Managment System</div>
         <div className="service-item">Zoo Guide App</div>
         <div className="service-item">Recipe Book App</div>
         <div className="service-item">To-Do-List App</div>
         <div className="service-item">Survey Forms</div>
         
         

        </div>
        
          
         </section> 

            {/* CONTACT SECTION */}
            <section id="contact" className="contact-section">
            <h2 className="section-title">Get in Touch</h2>
            <p>Please find my contact info below</p>

           <div className="contact-card">
             <p><i className="fa-solid fa-phone"></i> +27 76 647 9872</p>
            <p><i className="fa-solid fa-envelope"></i> nkaisengjakobo@gmail.com</p>
            <p>
             <i className="fa-brands fa-linkedin"></i>
               <a href="https://www.linkedin.com/in/nkaiseng-jakobo-403870331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank" rel="noopener noreferrer">
                linkedin.com/in/nkaiseng
             </a>
            </p>
           </div>
         </section>
          
         </div>
 
  );
}

export default Home;
