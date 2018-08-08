import React, { Component } from 'react'


import './contact.css';
import Navbar from '../Navbar/navbar';
import Jumbotron from '../sub-components/jumbotron/jumbotron';
import Footer from '../Footer/Footer';


import Background from '../../img/contact2.jpg';

class Contact extends Component {


  componentDidMount = () => {
    document.getElementById("nav").style.position = "fixed";
   
    // scroll TOP
    window.scrollTo(0,0);
    


  }

  render() {

    return (

        <div className="contact" id="contact">
            <Navbar/>
            <Jumbotron src={Background} rel="bro"/>
            <h1>  Contact</h1>
            <Footer/>
        </div>
    )
  }
}

export default Contact;
