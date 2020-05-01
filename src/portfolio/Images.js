import React,{Component} from 'react';
import styled from 'styled-components';



export default class Images extends Component{


render(){

       const {id, title,img,liked} =this.props.info;
        const{ LikedOnce , openModal }=this.props.values;

              return(
                            
                       
                           <ProductWrapper className="col-12 col-md-6 col-lg-3 mx-auto mb-4" >
                         <div className="card" key={id} >
                               <div className="img-container">
                               <img className="img-fluid" src={img} alt="images"  onClick={
                              ()=> openModal(id,false)
                               } />
                          

                                <button className="liked" onClick={() => LikedOnce(id)}              >
                                          

                                      {liked
                                      	?(<i className="fa fa-thumbs-up" style={{color:"#F05E23"}} />) 
                                      	:(<i liker className="fa fa-thumbs-up"  />)}
                                

                                </button>
                               
                         
                               </div>

                               <div className="card-footer text-center">
                                 {title}
                               </div>
                         </div>
                         
                            </ProductWrapper>  
                     
                         
                         
              	)

}
}


const ProductWrapper = styled.div`
.liked{
	outline:none;
	position:absolute;
	right:0.2rem;
	bottom:0.2rem;
	 padding:1em 2em;
    background:var(--lightBlue);
    border:none;
    color:var(--mainWhite);
    font-size:1.4rem;


    transform:translate(100%,10%) rotate(90deg);
    
    transition:all 1s linear;

}


.card{
	border-color:transparent;
	overflow:hidden;
	transition:all 1s linear;

}
.card-footer{
	background:transparent;
	border-top:transparent;
	z-index:1;
	transition:all 1s linear;
}

&:hover{
	.card{
		border:0.04rem solid rgba(0,0,0,0.2);
		border-radius:1.25rem;
		box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
	}

	.card-footer{
		background:rgba(247,247,247);
	}

	.img-container{
		transform:scale(1.2);
		transition:all 1s linear;
	}

	.liked{
		transform:translate(0,0);
	}
}

.img-container{
	
    overflow:hidden;
    transition:all 1s linear;
    cursor:pointer;
}

.img-fluid{
	overflow:hidden;
	
}
.img-container:hover .card-img-top{
	transform:scale(1.2);
}


`;