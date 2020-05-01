import React from "react";


 import Slideshow from './homecomponents/Slider';

import WorkDomain from './homecomponents/WorkDomain';
import Title from '../components/Title';
import Foot from './homecomponents/Footer';



export default class Home extends React.Component {
  render() {
    
    return ( 
    	       <><div className="container-fluid">
               <Slideshow />
               </div>
                 <div className="container">
                 <Title value="What I can Do for You" top="mt-4 p-5"  />
                 <div className="d-flex flex-row justify-content-around">
                  
                 
                  <div className="  p-3 flex-column  col-12  text-center mx-auto">
                 <WorkDomain />
                  </div>
                  </div>
                  </div>
               <Foot />
               </>
    );
  }
}