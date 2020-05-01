import React,{Component} from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../Context';


export default class WebDesign extends Component{


render(){

              return(
                        <ProductConsumer>
                {(value) =>{
                const{id,img}=value.WebDesigns[value.cartTotal];
                                    const{openModal,getNewValue}=value;

                              console.log(id);
                              console.log(value.cartTotal);    
                          
                    return(



<ProductWrapper className="col-12  mx-auto mt-4 mb-4" >
                         <div className="card" key={id} >
                               <div className="img-container">
                               <img className="img-fluid" src={img} alt="images"  onClick={
                              ()=> openModal(id,null)
                               } />
                          
                                
                            
                               
                         
                               </div>

                               <div className="card-footer text-center ">
                                 <div className="d-flex flex-row justify-content-around">
                                  <div className="flex-column">
                                  <i class="fas fa-arrow-left" onClick={()=>getNewValue(value.cartTotal,true)}></i>
                                  </div>
                                  <div className="flex-column">
                                  <i class="far fa-square"></i>
                                  </div>
                                  <div className="flex-column">
                                  <i class="fas fa-arrow-right" onClick={()=>getNewValue(value.cartTotal,false)}></i>
                                  </div>
                                  
                                 </div>
                               </div>
                         </div>
                         
                            </ProductWrapper>  
                     
             









                      )
                  
                }

                }


         </ProductConsumer>    
                           
                           
                         
                         
              	)

}
}


const ProductWrapper = styled.div`

i{
	
		transition:all 0.5s linear;
}
i:hover{
	transform:scale(1.2);
		transition:all 0.5s linear;
		cursor:pointer;
}
.card{
		border:0.1rem solid black;
	box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
	overflow:hidden;
	transition:all 1s linear;
	border-radius:1.25rem;

}

.img-container{
	cursor:pointer;
}






`;