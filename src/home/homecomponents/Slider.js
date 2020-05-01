import React,{Component} from 'react';
import styled from 'styled-components';


import Slider from 'react-slick';



const Wrapper=styled.div`
margin-top:80px;



`
const page=styled.div`




`
export default class Slideshow extends Component{
render(){
 var settings = {
 	                  pauseOnHover:false,
 	                   focusOnSelect:false,
		               speed:3000,
		               edgeFriction:0.35,
		               cssEase:"linear",
		               useCSS:true,
		              slidesToShow:5,
		              slidesToScroll:1,
		              infinite:true,
		            useTransform:true,
		              autoplay:true,
		              centerMode:true
    };


return(
          

               <Wrapper  >


    
      <Slider {...settings}>

      <page><img className="img-fluid" src="/images/1.png" alt="logo" /> </page>       
        <page><img className="img-fluid" src="/images/3.png" alt="logo" /> </page>
        <page><img className="img-fluid" src="/images/5.png" alt="logo" /> </page>
        <page><img className="img-fluid" src="/images/6.png" alt="logo" /> </page>
        <page><img className="img-fluid" src="/images/7.png" alt="logo" /> </page>       
        <page><img className="img-fluid" src="/images/8.png" alt="logo" /> </page>
        <page><img className="img-fluid" src="/images/9.png" alt="logo" /> </page>
        <page><img className="img-fluid" src="/images/11.png" alt="logo" /> </page>
        <page><img className="img-fluid" src="/images/12.png" alt="logo" /> </page>       
        <page><img className="img-fluid" src="/images/13.png" alt="logo" /> </page>
        <page><img className="img-fluid" src="/images/14.png" alt="logo" /> </page>
        <page><img className="img-fluid" src="/images/15.png" alt="logo" /> </page>
        <page><img className="img-fluid" src="/images/20.png" alt="logo" /> </page>       
        <page><img className="img-fluid" src="/images/21.png" alt="logo" /> </page>
        <page><img className="img-fluid" src="/images/23.png" alt="logo" /> </page>
        
      </Slider>
     </Wrapper>
       
	);


}

}