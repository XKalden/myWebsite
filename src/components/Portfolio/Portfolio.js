import React, { Component } from 'react'


import './Portfolio.css';
import Navbar from '../Navbar/navbar';
import Jumbotron from '../sub-components/jumbotron/jumbotron';
import Footer from '../Footer/Footer';


import Background from '../../img/project.jpg';
import Aloha from '../../img/aloha.jpg';
import Burger from '../../img/burger.png';
import Youtube from '../../img/youtube.png';
import Myweb from '../../img/myweb.png';
import Rubyblog from '../../img/ruby-blog.png';
import Realestate from '../../img/realestate.png';
import Kblog from '../../img/k-blog.png';
import LandingPage from '../../img/landingpage.png';
import FlexBox from '../../img/flexbox.png';
import Formstite from '../../img/formsite.png';
import Wordpress from '../../img/wordpress.png';
import Blockchain from '../../img/blockchain.jpg';

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

            <div className="portfolio__container">
            <h1 className="about__h1">My Portfolio</h1>

            <div className="protfolio__grid-container">

              <figure className="protfolio__grid">
               <a href="https://kalden-web.herokuapp.com/" rel="noopener noreferrer" target="_blank" className="a__website">
                <div className="grid__image-container">
                  <img className="grid__image-size" src={Myweb} alt="bkground"/>
                </div>
                <figcaption className="story__caption">
                  <h4 className="story__h4">My Website | React App</h4>
                  <p className="story__p">Portfolio Website using React Libary</p>
                </figcaption>
                </a>
              </figure>


              <figure className="protfolio__grid">
               <a href="https://react-my-burger-c005b.firebaseapp.com/" rel="noopener noreferrer" target="_blank" className="a__website">
                <div className="grid__image-container">
                  <img src={Burger} alt="bkground" className="grid__image-size"/>
                </div>
                <figcaption className="story__caption">
                  <h4 className="story__h4">Burger Build | React App</h4>
                  <p className="story__p">Stores user burger ingredient data in Firebase </p>
                </figcaption>
                </a>
              </figure>


  
              <figure className="protfolio__grid">
               <a href="https://xkalden.github.io/Aloha_Mobile-First-Website/" rel="noopener noreferrer" target="_blank" className="a__website">
                <div className="grid__image-container">
                  <img src={Aloha} alt="bkground" className="grid__image-size"/>
                </div>
                <figcaption className="story__caption">
                  <h4 className="story__h4">Mobile First Site | Html & Css</h4>
                  <p className="story__p">Build using mobile first media queries approach  </p>
                </figcaption>
                </a>
              </figure>


              <figure className="protfolio__grid">
               <a href="https://github.com/XKalden/React-Youtube" rel="noopener noreferrer" target="_blank" className="a__website">
                <div className="grid__image-container">
                  <img src={Youtube} alt="bkground" className="grid__image-size"/>
                </div>
                <figcaption className="story__caption">
                  <h4 className="story__h4"> Youtube Api | React App</h4>
                  <p className="story__p">Able to watch any videos uploaded on Youtube</p>
                </figcaption>
                </a>
              </figure>

              <figure className="protfolio__grid">
               <a href="https://kalden-rails.herokuapp.com/" rel="noopener noreferrer" target="_blank" className="a__website">
                <div className="grid__image-container">
                  <img src={Rubyblog} alt="bkground" className="grid__image-size"/>
                </div>
                <figcaption className="story__caption">
                  <h4 className="story__h4">Blog Site | Ruby on Rails</h4>
                  <p className="story__p">Able to create accounts, publish blogs and leave comments</p>
                </figcaption>
                </a>
              </figure>


              <figure className="protfolio__grid">
               <a href="https://xkalden.github.io/realestate-House-webstie/" rel="noopener noreferrer" target="_blank" className="a__website">
                <div className="grid__image-container">
                  <img src={Realestate} alt="bkground" className="grid__image-size"/>
                </div>
                <figcaption className="story__caption">
                  <h4 className="story__h4">Real Estate Web | Css Grid </h4>
                  <p className="story__p">Build using CSS Grid layouts. Desktop first approach</p>
                </figcaption>
                </a>
              </figure>



              <figure className="protfolio__grid">
              <a href="http://kalden.herokuapp.com/" rel="noopener noreferrer" target="_blank" className="a__website">
               <div className="grid__image-container">
                 <img src={Kblog} alt="bkground" className="grid__image-size"/>
               </div>
               <figcaption className="story__caption">
                 <h4 className="story__h4"> K-Photo | Ejs - Express</h4>
                 <p className="story__p">Upload Images and leave comment to MongoDB</p>
               </figcaption>
               </a>
             </figure>

             <figure className="protfolio__grid">
              <a href="https://xkalden.github.io/hostTest/" rel="noopener noreferrer" target="_blank" className="a__website">
               <div className="grid__image-container">
                 <img src={FlexBox} alt="bkground" className="grid__image-size"/>
               </div>
               <figcaption className="story__caption">
                 <h4 className="story__h4"> Hotel Review | Flexbox Sass</h4>
                 <p className="story__p">Build using CSS Flexbox layouts. Desktop first approach</p>
               </figcaption>
               </a>
             </figure>


             <figure className="protfolio__grid">
              <a href="https://xkalden.github.io/LandingPage_gitHost/" rel="noopener noreferrer" target="_blank" className="a__website">
               <div className="grid__image-container">
                 <img src={LandingPage} alt="bkground" className="grid__image-size"/>
               </div>
               <figcaption className="story__caption">
                 <h4 className="story__h4">Landing Web Page | Sass </h4>
                 <p className="story__p">Form page with Css animation</p>
               </figcaption>
               </a>
             </figure>


             <figure className="protfolio__grid">
             <a href="https://xkalden.github.io/askForTask-Website/" rel="noopener noreferrer" target="_blank" className="a__website">
              <div className="grid__image-container">
                <img src={Formstite} alt="bkground" className="grid__image-size"/>
              </div>
              <figcaption className="story__caption">
                <h4 className="story__h4"> Form Page | Jquery</h4>
                <p className="story__p">Form Validation using Jquery</p>
              </figcaption>
              </a>
            </figure>

            <figure className="protfolio__grid">
             <a href="https://primerpresentationgroup.com/" rel="noopener noreferrer" target="_blank" className="a__website">
              <div className="grid__image-container">
                <img src={Wordpress} alt="bkground" className="grid__image-size"/>
              </div>
              <figcaption className="story__caption">
                <h4 className="story__h4">Primer Presentaion | Wordpress </h4>
                <p className="story__p">Build custom wordpress theme from the ground up.</p>
              </figcaption>
              </a>
            </figure>


            <figure className="protfolio__grid">
             <a href="https://github.com/XKalden/BlockChain_js" rel="noopener noreferrer" target="_blank" className="a__website">
              <div className="grid__image-container">
                <img src={Blockchain} alt="bkground" className="grid__image-size"/>
              </div>
              <figcaption className="story__caption">
                <h4 className="story__h4">Block Chain | NodeJs </h4>
                <p className="story__p">Build blockchain cryptocurrency using javascript constructor function</p>
              </figcaption>
              </a>
            </figure>


            
            
            </div>

            </div>
            <Footer/>
        </div>
    )
  }
}

export default Portfolio;
