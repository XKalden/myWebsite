import React, { Component } from 'react'
import Background from '../../img/newMountain.png';
import classnames from 'classnames';


import './index.css';



class index extends Component {
    state = {
        click: false
    }


    buttonClick = () => {
        console.log('clicked');
        this.setState({click: true});
        document.getElementById("wow").style.transform = "translateY(100%)";
        document.getElementById("about").style.left = "0";
        document.getElementById("wow").style.backgroundImg = "./img/logo.png";
        // document.getElementById("wow").style.backgroundImage = `"url(${Logo})"`;

        setTimeout(function(){ 
          document.getElementById("nav").style.position = "fixed";
          document.getElementById("layout_wow").style.overflow = "visible";
          document.getElementById("wow").style.display = "none";

         }, 1200);
    } 


  render() {


    return (
      
      <div className="wow" id="wow">
          <div className="bk__container">
            <img className="bk__img animation-bottom"src={Background} alt="logo"/> 
          </div>

            <h1 className="main__name animation-top">Tsering Kalden</h1>
            <p className="full__stack animation-middle">Full Stack Developer</p>

            <div className="btn__container animation-right">
            <button className="btn" onClick={this.buttonClick} 
            >Click me</button>
            </div>        
      </div> 



    )
  }
}

export default index;
