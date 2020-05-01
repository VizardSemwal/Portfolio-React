import React,{Component} from 'react'
import styled from 'styled-components';
import {ProductConsumer} from '../Context';

import {Link} from 'react-router-dom';

export default class Modal extends Component{

	render(){
		return (
                <ProductConsumer>
                  {(value) =>{
                  	const {modalOpen,closeModal}=value;
                  	const {img,title,info}=value.detailLogo;
                   
                  	if(!modalOpen){
                  		return null;
                  	}
                  	else{
                  		return (<ModalContainer >
                           <div className="container">
                            <div id="modal" 
                       className="col-11 mx-auto p-5 col-md-8 col-lg-8 text-center 
                       text-capitalize">
                           <div className="d-flex flex-row flex-wrap justify-content-between">
                            <div className="flex-column col-lg-6 align-self-center ">
                           <div class="p-2 bd-highlight">
                               <img src={img} className="img-fluid" alt="product" />
                      <h5>{title} </h5>
                           </div>
                           </div>
                            <div className="flex-column col-lg-6 align-self-center">
                            <div class="p-2 flex-shrink-1 bd-highlight">
                            
                       <p>{info}</p>
                      <Link to="/portfolio" >
                         <button className="btn btn-danger" onClick={() => closeModal()} >
                           Go Back
                        </button>

                      </Link>
                           </div>
                      </div>
                    
                           </div>
   
                           </div>
                           </div>
                  		</ModalContainer>);
                  	}
                  } } 
 
                </ProductConsumer>
     
			)
	}
}

const ModalContainer = styled.div`
z-index:2;
position:fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
display:flex;
align-items:center;
justify-content:center;
background:rgba(0,0,0,0.6);

#modal{
	background:white;
  border-radius:2rem;


}

`