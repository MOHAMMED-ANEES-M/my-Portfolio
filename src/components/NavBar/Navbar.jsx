import { useContext } from 'react';
import './Navbar.css'
import * as React from 'react';
import { FaInstagram, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import ThemeContext from './ThemeContext';



const Navbar = () => {

  const {theme,toggleTheme}= useContext(ThemeContext)

  
  
  return (
    <div className= {theme==='dark'?'darktheme':'lighttheme'}>
     
     {/* navbar */}
    
    
      <nav className='navbar fixed-top justify-content-center mt-3  '>
        <ul className={theme==='dark'?'darknavlist d-flex flex-nowrap justify-content-center  list-unstyled':'lightnavlist d-flex flex-nowrap justify-content-center  list-unstyled'}>
          <li><a className={theme==='dark'?'darkcool-link':'lightcool-link'} href="#">Home</a></li>
          <li><a className={theme==='dark'?'darkcool-link':'lightcool-link'} href="#about">About</a></li>
          <li><a className={theme==='dark'?'darkcool-link':'lightcool-link'} href="#stack">Stack</a></li>
          <li><a className={theme==='dark'?'darkcool-link':'lightcool-link'} href="#contact">Contact</a></li>
        </ul>
        
      </nav>
    
      {/* navbar end */}

      {/* home */}
      
      <div className={theme==='dark'?'darkvl':'lightvl'}>
        <h3 className='hi ms-5 '>Hi! Iam</h3>
        <h1 className='animate__fadeIn name ms-5 ' >MOHAMMED<span><br /></span> ANEES M</h1>
        <h1  className='dev ms-5 '>FULL STACK DEVELOPER</h1>
      </div> 

      {/* theme btn */}
      <div className='themebtn'>
      <label class="switch">
      <input type="checkbox" onClick={toggleTheme}/>
      <span class="slider"></span>
      </label>  
      </div>

      <div className='themetxt d-flex flex-nowrap gap-5 '>
        <span className='iconsun'><FaSun/></span>
        <p className='m-0 '> Change Theme Here</p>
        <span className='iconmoon'><FaMoon/></span>
      </div>
      {/* theme btn end */}

      {/* home end */}

      {/* About */}
      <h1 id='about'></h1>
      <h1  className={theme==='dark'?'darkabouth1':'lightabouth1'}>ABOUT</h1>

      <div className="container px-4  mt-5 ">
      <div className="">
      <div className="text-center img ">
          
          <img  className={theme==='dark'?'rounded-circle w-25 darkmyimg':'rounded-circle w-25 lightmyimg'} src="./assets/aneesimg.jpeg" alt="" />
          
        </div>
        <div className="">
        
          <p className={theme==='dark'?'darkaboutinfo':'lightaboutinfo'}>As a recent graduate with a passion for technology, I embarked on a journey to become a Full Stack Web Developer,
           specializing in the MERN stack. Currently, I'm making strides in my career as an intern where I continue to learn and contribute to exciting projects.
          Proficient in design tools like Figma and Canva. Committed to continuous growth and innovation in the ever-evolving tech landscape.</p>
        </div>
        
      </div>
      </div>
      {/* about end */}

          {/* tech */}
          <h1 id='stack'></h1>
      <div>
      <h1  className={theme==='dark'?'darkskillh1':'lightskillh1'}>STACK</h1>
      <div className={theme==='dark'?'mt-5 darkskilldiv':'mt-5 lightskilldiv'}>
        <h1 className={theme==='dark'?'darkskills':'lightskills'}>HTML</h1>
        <h1 className={theme==='dark'?'darkskills':'lightskills'}>Bootstrap</h1>
        <h1 className={theme==='dark'?'darkskills':'lightskills'}>React js</h1>
        <h1 className={theme==='dark'?'darkskills':'lightskills'}>Node js</h1>
        <h1  className={theme==='dark'?'darkskills':'lightskills'}>MongoDB</h1>
        <h1  className={theme==='dark'?'darkskills':'lightskills'}>Figma</h1>
      </div>
      </div>
          {/* tech end */}

          {/* contact */}
          <h1 id='contact'></h1>
          <div className='mt-5'>
          <h1  className={theme==='dark'?'darkcontacth1':'lightcontacth1'}>CONTACT</h1>
          <div className='d-flex flex-wrap justify-content-center gap-5 '>

            <div className='formdiv'>
          <form className={theme==='dark'?'darkform':'lightform'} action="">
            <input className={theme==='dark'?'darkinput':'lightinput'} type="text"  placeholder='Name'/><br />
            <input className={theme==='dark'?'darkinput':'lightinput'} type="email"  placeholder='Email'/><br />
            <input className={theme==='dark'?'darkinput':'lightinput'} type="text"  placeholder='Subject'/><br />
            <input className={theme==='dark'?'darkinput':'lightinput'} type="text"  placeholder='Message'/><br />
            <div className="wrapper"><input className={theme==='dark'?'darkformbtn':'lightformbtn'}  type="submit"  value="Send" /></div>
          </form>
          </div>

          <div className='w-50 contactlink'>
            <div className='maildiv '>
             <a className={theme==='dark'?'darkemaillink':'lightemaillink'} href="https://mail.google.com/">
              <h1 className={theme==='dark'?'darkemail':'lightemail'}>mhdaneesm3@gmail.com</h1>
             </a>
          </div>
              <div className={theme==='dark'?'d-flex flex-wrap justify-content-center gap-4 darksociallist':'d-flex flex-wrap justify-content-center gap-4 lightsociallist'}>
              <a href='https://www.linkedin.com/in/mohammed-anees-m-127392290/' ><button className={theme==='dark'?'btn  darksocialbtn':'btn  lightsocialbtn'}><FaLinkedin/><span className='sclbtnname'>  LinkedIn</span></button></a>
              <a href="https://github.com/MOHAMMED-ANEES-M" className='giticon'><button className={theme==='dark'?'btn  darksocialbtn':'btn  lightsocialbtn'}><FaGithub/><span className='sclbtnname'>  GitHub</span></button></a>
              <a href="#" className='resume'><button className={theme==='dark'?'btn  darksocialbtn':'btn  lightsocialbtn'}><FaLink/><span className='sclbtnname  '>  Resume CV</span></button></a>
              <a href="#" className='resume'><button className={theme==='dark'?'btn  darksocialbtn':'btn  lightsocialbtn'}><FaInstagram/><span className='sclbtnname '>  Instagram</span></button></a>
              </div>
              </div>
          </div>
          </div>

          

          {/* footer */}
          <div className='foot'>
           <h1></h1>
          </div>

          <nav>
        <ul className='d-flex flex-nowrap  justify-content-evenly mb-0   gap-5  list-unstyled '>
          <li><p>© 2023 Anees. All Rights Reserved.</p></li>
          <li><p>Designed by Anees</p></li>
        </ul>
      </nav>
          
    </div>
      
    
  )
}

export default Navbar
