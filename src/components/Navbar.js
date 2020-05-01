import React,{Component} from 'react';
import {Link} from 'react-router-dom';


export default class Navbar extends Component{
  

  
show =() =>{

  const v=document.getElementById('navbarNavAltMarkup').className;
  console.log(v);

  if(v==="collapse navbar-collapse justify-content-end mx-auto d-block"){
    document.getElementById('navbarNavAltMarkup').className="collapse navbar-collapse justify-content-end mx-auto d-none";
  }
    else{
    document.getElementById('navbarNavAltMarkup').className="collapse navbar-collapse justify-content-end mx-auto d-block";
  }
}

render(){


  return (
    <React.Fragment>
       
       <div className="mb-5">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top "  >
  <Link to="/" exact className="navbar-brand" ><kbd>#</kbd> V I Z A R D</Link>
  <button className="navbar-toggler" onClick={this.show} type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-end mx-auto d-none" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link to="/portfolio" className="nav-item nav-link active pr-5" >Portfolio </Link>
      <Link to="/contactus" className="nav-item nav-link pr-5" >Contact Me</Link>
      <Link to="/aboutus" className="nav-item nav-link pr-5" >About Me</Link>
      
    </div>
  </div>
</nav>

       </div>

    </React.Fragment>
  );

}
}


