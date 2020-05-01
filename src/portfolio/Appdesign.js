import React,{Component} from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../Context';


export default class Appdesign extends Component{


render(){

      

        

         

			   

              return(
                            
                          
                           <ProductWrapper className="col-12 col-md-6 col-lg-4 mx-auto " >
                             <ProductConsumer>
                              {(value) =>{
                	              const{id,img}=value.Appdesigns[value.cartTax];
                                    const{openModal,getValue}=value;
                		return(
                         <div className="card" key={id} >
                               <div className="img-container ">
                                
                               <img className="img-fluid" src={img} alt="images"  onClick={
                              ()=> openModal(id,true)
                               } />
                          

                            
                               
                         
                               </div>

                               <div className="card-footer text-center ">
                                 <div className="d-flex flex-row justify-content-around">
                                  <div className="flex-column">
                                  <i class="fas fa-arrow-left" onClick={()=>getValue(value.cartTax,true)}

                                     

                                  ></i>
                                  </div>
                                  <div className="flex-column">
                                  <i class="far fa-square"></i>
                                  </div>
                                  <div className="flex-column">
                                  <i class="fas fa-arrow-right" onClick={()=>getValue(value.cartTax,false)}></i>
                                  </div>
                                  
                                 </div>
                               </div>
                         </div>
                                      )
                	
                }
            }
                     </ProductConsumer>
                         
                            </ProductWrapper>  

               
                         
                         
              	)

}
}


const ProductWrapper = styled.div`

.img-fluid{
	border-top-right-radius:1.25rem;
	border-top-left-radius:1.25rem;
}

.img-container
{
	
	transition:all 2s linear;
}
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
	
	transition:all 1s linear;
	border-radius:1.25rem;

}

.img-container{
	cursor:pointer;
}

.card-footer{
	poistion:absolute;
}




`;