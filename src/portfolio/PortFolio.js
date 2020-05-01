import React,{Component} from 'react';
import { ProductConsumer } from '../Context';
import Images from './Images';
import Appdesign from './Appdesign';
import Title from '../components/Title'
import WebDesign from './WebDesign';
export default class PortFolio extends Component{

	render(){

		return(
			   <div className="container " style={{marginTop:"5rem"}}>
			    <Title value="Few Logos Designed By Me" top="mb-3 p-3"/>
			   <div className="row">
			   <ProductConsumer>
                {(value) =>{
                	return value.logos.map((item)=>{
                          
                		return(<Images info={item} values={value} />)
                	})
                }

                }

                 </ProductConsumer>
			   
                 <Title value="An App Designed By Me" top="mb-5 p-5" />
                  
                          
                		<Appdesign  />
         


			    <Title value="Website Designed and Developed By Me" top="mt-5 p-5" />
                    <WebDesign />
             </div>
			</div>
			)
	}
}