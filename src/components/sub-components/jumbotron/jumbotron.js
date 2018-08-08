import React from 'react'
import './jumbotron.css';

export default (props) => {
  return (
    <div className="jumbotron__container">
        
        <img className="jumbotron__img" src={props.src} alt={props.alt}/>

    </div>
  )
}
