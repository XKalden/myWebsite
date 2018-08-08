import React, { Component } from 'react'
import {NavLink , Link  } from 'react-router-dom';
import Logo from '../../img/eagle.png';


import "./navbar.css";


class navbar extends Component {

    handleScroll = () => {
        let lastScrollY = window.scrollY;
    

        if(lastScrollY >= 150){
            document.getElementById("logo__eagle").style.height = "40px";
        }

        if(lastScrollY <= 150){
            document.getElementById("logo__eagle").style.height = "70px";
        }
      };
    
  render() {
    window.addEventListener('scroll', this.handleScroll);


    return (
   
        <nav className="navBar" id="nav">
            <ul className="first__Nav"> 
                <ul className="first__ul">
                    <li>Call: <a href="tel:647-573-9056">647-573-9056</a> | Email: <a href="mailto:kaldenppc@outlook.com?Subject=Hello%20again" target="_top">kaldenppc@outlook.com</a></li>
                </ul>
                <ul className="second__ul">
                    <li><a className="linkedin" href="https://www.linkedin.com/in/tkalden/" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                    <li><a className="facebook" href="https://www.facebook.com/Real.Kalden" target="_blank"><i className="fab fa-facebook"></i></a></li>
                    <li><a className="instagram" href="https://www.instagram.com/tsering.kalden/" target="_blank"><i className="fab fa-instagram"></i></a></li>
                    <li><a className="github" href="https://github.com/XKalden" target="_blank"><i className="fab fa-github-square"></i></a></li>
                    <li><a className="youtube" href="https://www.youtube.com/user/kalden619/featured" target="_blank"><i className="fab fa-youtube"></i></a></li>
                </ul>
            </ul>

            <ul className="second__Nav">
                <ul className="logo__container">
                    <li><Link to="/"><img id="logo__eagle" className="logo" src={Logo} alt="log"/></Link></li>
                </ul>    
                <ul className="nav__menue">
                    <li><NavLink activeClassName="active" to="/resume">RESUME</NavLink></li>
                    <li><NavLink activeClassName="active" to="/portfolio">PORTFOLIO</NavLink></li>
                    <li><NavLink activeClassName="active" to="/contact">CONTACT</NavLink></li>
                </ul>
            </ul>
        </nav>
    );
  }
}


export default navbar;
