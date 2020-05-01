import React,{Component} from 'react'
import Form from './ContactUsComponents/Form'
import Title from '../components/Title'
import Foot from '../home/homecomponents/Footer';

export default class ContactUs extends Component{

render(){
		return(
   
           <div>
           
           <Title value="Please Fill your Information" top="mt-5 p-5" />
            <Form   />
           <Foot />
           </div>

  );
}
}
