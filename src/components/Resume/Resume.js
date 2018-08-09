import React, { Component } from 'react'
import classnames from 'classnames';


import Navbar from '../Navbar/navbar';
import Jumbotron from '../sub-components/jumbotron/jumbotron';
import Footer from '../Footer/Footer';
import './resume.css';

import Background from '../../img/sutetie2.jpg';
import wow from '../../img/Resumekalden.pdf';

class Resume extends Component {

    state = {
        show: 'web'
    }




    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
        document.getElementById("nav").style.position = "fixed";
        // scroll TOP
        window.scrollTo(0,0);
    }


    changeResume = (title) => {
        if(title === 'web'){
            this.setState({show:'web'});
        } else if (title === 'digital'){
            this.setState({show:'digital'})
        }
    }

    render() {        
        let resumeShow = (
            <div>
                <h1>Null</h1>
            </div>
        )

        if( this.state.show === 'web'){
            resumeShow = (
                <div>
                    <h1 className="web__h1">Full Stack Developer </h1>
                    <p> I mainly focus on Front-end Web Development</p>
                    
                    <div><h2>Technology:</h2></div>
                    <div className="web__grid">

                        <div className="web-1">
                            <p className="p1">Programing Language</p>
                        </div>
                        <div className="web-2">
                            <ul> 
                                <li> Html/ Css </li>
                                <li> Javascript / Es6 /Es7 </li>
                                <li> C++ </li>
                                <li> PHP </li>
                                <li> Ruby </li>
                            </ul>
                        </div>


                        <div className="framework">
                            <p>Framework & Library</p>
                        </div>

                        <div className="framwork-side">
                            <ul>
                                <li>NodeJs</li>
                                <li>Express</li>
                                <li>React</li>
                                <li>Redux</li>
                                <li>Ruby on Rails</li>
                                <li>Wordpress (CMS)</li>
                                <li>GULP</li>
                                <li>SASS</li>
                                <li>RESTful api</li>
                                <li>JSON api</li>
                                <li>Axios</li>
                                <li>Bootstrap</li>
                                <li>JQuery</li>
                            </ul>
                        </div>

                        <div className="database">
                            <p>Database</p>
                        </div>

                        <div className="database-side">
                            <ul>
                                <li>Firebase</li>
                                <li> MongoDB</li>
                            </ul>
                        </div>


                        <div className="version">
                            <p>Version Control</p>
                        </div>

                        <div className="version-side">
                            <ul>
                                <li>Git</li>
                            </ul>
                        </div>


                        <div className="operiting">
                            <p>Operating System</p>
                        </div>

                        <div className="operiting-side">
                            <ul>
                                <li>Windows</li>
                                <li>Mac OS X</li>
                            </ul>
                        </div>
                    </div>



                </div>
            )
        } else if (this.state.show === 'digital'){
            resumeShow = (
                <div>
                    <h1 className="web__h1">PPC & SEO Junior Specialist </h1>
                    <p>
                        Google Adwords Certified and Google Analytic Certified. <br/>
                        Expeience in ranking High on SERP (Search Engine Result Page) for google search.<br />
                        Experience in PPC (Pay Per Click) for Google Adwords. <br />
                        Able to Optimizing keyword and research keyword volumes and build relevant link. <br/>
                        Only Apply the Best SEO practices to build effective foundation for success.
                    </p>
                </div>
            )
        }



        return (
            <div className="resume" id="resume">
                <Navbar/>
                <Jumbotron src={Background} rel="bro"/>


                <div className="resume__container">

                    <h1 className="about__h1"> My Resume</h1>

                    <div className="resume__p-flex">
                        <div className="options" >
                        
                            <button 
                                className={classnames('btn btn-custom', {
                                    'redd': this.state.show === 'web'
                                })}
                                onClick={()=>this.changeResume('web')}>Web Development</button>

                            <button 
                                className={classnames('btn btn-custom', {
                                    'redd': this.state.show === 'digital'
                                })}
                                onClick={()=>this.changeResume('digital')}>Digital Marketing</button>

                            <a className="btn btn-custom" href={wow} target="_blank">Download Resume</a> 
                         
                        </div>

                        <div className="option__picked">
                            {resumeShow}

                        </div>
                    </div>        
                </div>
              


                <Footer/>

      
            </div>
        )
  }
}

export default Resume;
