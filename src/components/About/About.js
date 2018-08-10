import React, { Component } from 'react'

import './About.css';
import Navbar from '../Navbar/navbar';
import Jumbotron from '../sub-components/jumbotron/jumbotron';
import Footer from '../Footer/Footer';



import Background from '../../img/alone.jpg';
import Kalden from '../../img/kalden.png';

class About extends Component {

  

    
    render() {
    
    
        return (
            <div className="about" id="about">
                <Navbar/>
                <Jumbotron src={Background} rel="bro"/>

  


                <div className="about__me">

                    <div className="about__story">

                   
                        <div className="about__story-container">
                            <h1 className="about__h1">Aloha! </h1>
                            <p className="about__story-p">
                            My name is Kalden and I am 22 years old. I am a self-motivated individual with a burning passion
                            for learning the best programming practices. I mainly focus my time learning, topics that correlate with <span className="blue">Web Development</span> and Digital Marketing. 
                            <br/><br/>
                            I am currently looking for an environment where I can grow and deliver my skills as a developer. I am confident in my skills and experience to be a great asset.   
                            <br/><br/>
                            Time is of the Essence. 
                            <br/>
                            Getting straight to the point; Hire me and I promise to make you one proud man or women.
                            <br/><br/>
                            If you would like to discuss my skills and experience in greater detail, please do not hesitate to contact me at​ 647-573-9056 or email me at kaldendeveloper@gmail.com
                            </p>
                            
                        </div>
                       

                        <div className="kalden__img-container">
                            <img className="kalden__img" src={Kalden} alt="kalden"/>
                        </div>

                    </div>

                
                </div>


                <Footer />

                
               





            
            </div>
        )
    }
}


export default About;
