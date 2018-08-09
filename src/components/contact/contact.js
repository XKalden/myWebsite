import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import './contact.css';
import Navbar from '../Navbar/navbar';
import Jumbotron from '../sub-components/jumbotron/jumbotron';
import Footer from '../Footer/Footer';


import Background from '../../img/contact2.jpg';



class Contact extends Component {


    onMarkerClick = () => {
        alert('Address - 1251 King St West, M6K 1G7');
    } 

    componentDidMount = () => {
        document.getElementById("nav").style.position = "fixed";
    
        // scroll TOP
        window.scrollTo(0,0);
        
    }

  render() {
        const mapstyle = {
            width: '40%',
            height: '50%'
        }       


    return (

        <div className="contact" id="contact">
            <Navbar/>
            <Jumbotron src={Background} rel="bro"/>
            <div className="contact__container">
                <h1 className="about__h1">My Contact</h1> 

                <p className="contact__p"><span className="blue">Cell</span>:  647-573-9056
                <br/>
                  <span className="blue">Email</span>: kaldendeveloper@gmail.com
                
                </p>

                <div className="google__map">

                    <Map google={this.props.google} 
                            style={mapstyle}
                            initialCenter={{
                            lat: 43.638227,
                            lng: -79.429593
                            }}

                            zoom={14}>
                    
                        <Marker onClick={this.onMarkerClick}
                                name={'Current location'} />
                
                        <InfoWindow onClose={this.onInfoWindowClose}>
                        
                        </InfoWindow>
                    </Map>

                </div>

            </div>
            <Footer/>
        </div>


    )
  }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAW49FPawF9MJc8vLzIdL8y9iGLGUcFMvI')
  })(Contact)
