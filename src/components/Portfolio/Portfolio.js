import React, { Component } from 'react'


import './Portfolio.css';
import Navbar from '../Navbar/navbar';
import Jumbotron from '../sub-components/jumbotron/jumbotron';
import Footer from '../Footer/Footer';


import Background from '../../img/project.jpg';

class Portfolio extends Component {


  componentDidMount = () => {
    document.getElementById("nav").style.position = "fixed";
    // scroll TOP
    window.scrollTo(0,0);
  }

  render() {

    return (

        <div className="portfolio" id="portfolio">
            <Navbar/>
            <Jumbotron src={Background} rel="bro"/>
            <h1> Profile</h1>
            <Footer/>
        </div>
    )
  }
}

export default Portfolio;
