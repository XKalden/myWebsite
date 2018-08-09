import React, { Component } from 'react'
import Aux from '../../hoc/Aux/Aux';


import Index from '../../components/Index/index';
import About from '../../components/About/About';


import './Layout.css';

class Layout extends Component {
  render() {
    return (

        <Aux>
            <div className="layout__container" id="layout_wow">
                <Index />
                <About />

            </div>
           
        </Aux>
    )
  }
}


export default Layout;
