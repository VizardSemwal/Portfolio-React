import React from 'react'
import styled from 'styled-components'
const NewImage =styled.img`

transition:all 1s linear;
border-radius:1.25rem;
&:hover{
	
		
		box-shadow:2px 2px 10px 0px rgba(0,0,0,0.5);
}

`

export default class Travel extends React.Component{

	render(){
                 const {img,title,id} =this.props.info;
		return(
               
              <div key={id} className="col-md-6  col-lg-4 col-12 mx-auto align-self-center">
                   <NewImage  src={img} alt="charity" className="img-fluid" />
                   <p className="text-center">{title}</p>
              </div> 

			);
	}
}