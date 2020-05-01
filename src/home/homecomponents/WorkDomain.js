import React,{Component} from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap';

const ButtonStyler=styled.button`


border-radius:1.25rem;
    box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
    
    transition:all 0.5s linear;
    border:0 !important;
    outline:none !important;
   



&:hover {
  transform:scaleX(1.2);
  background-color:black;
  color:white;

}

`



export default class  WorkDomain extends Component{

constructor(props){
	super(props);
	this.state={
		open:false
	}
}
 
setOpen = () =>
{
    if(this.state.open){
      this.setState({open: false});
    }
    else{
       this.setState({open: true});
    }
	 


}
 
render(){

 let myheader;
  if(this.state.open){
     myheader=(
      <div>
      <div className="d-flex flex-row flex-wrap justify-content-around mx-auto mt-5 ">
      <div className="flex-column mt-4">
      <Link to="/contactus">
      <ButtonStyler className="btn btn-danger" >Logo Design </ButtonStyler>
       </Link>
       </div>
      <div className="flex-column mt-4">
      <Link to="/contactus">
      <ButtonStyler className="btn btn-info">App Design</ButtonStyler>
       </Link>
</div>
      <div className="flex-column mt-4">
      <Link to="/contactus">
      <ButtonStyler className="btn btn-success">Website Design </ButtonStyler>
      </Link></div>
      <div className="flex-column mt-4 mb-5">
       <Link to="/contactus">
      <ButtonStyler className="btn btn-warning ">App Development </ButtonStyler>
       </Link></div>
      <div className="flex-column mt-4 mb-5">
       <Link to="/contactus">
      <ButtonStyler className="btn btn-secondary">Website Development </ButtonStyler>
       </Link></div>
      </div>
          </div>

      );
  }
  return (
    <> 
      <ButtonStyler  className="btn btn-primary"
        onClick={() => this.setOpen()}
        aria-controls="example-collapse-text"
        aria-expanded={this.state.open}
>      Click Me to See What i Am capable of..
      </ButtonStyler>
     {myheader}
    </>
  );
}
}

