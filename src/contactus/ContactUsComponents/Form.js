import React,{Component} from 'react'
import Alert from '../../components/Alert'
import styled from 'styled-components';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

export default class Form extends Component{
constructor(props){
	super(props);
	this.state={disabled:[true,true,true,true,true,true,true,],
    alert:false,
    matter:'',
	fname:'',
	lname:'',
	username:'',
	city:'',
	state:'',
	zip:''
	}
}


Verify = (name,event) =>{
 
	let val=event.target.value;
	let nam=name;

	
	
	if(val.length > 3)
	{
		 
              this.setState(()=> {return{[nam]:val}})
           let id=parseInt(event.target.id);
			let next=id+1;
			
          let dis=[...this.state.disabled];
          dis[next]=false;
         
          

          this.setState(()=>{ return{disabled:dis}})

      event.target.className="form-control is-valid";
       
         

      	
	}
	else{

event.target.className="form-control is-invalid";
    
	
	}
	
}

  submit = (event) => {

    

    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',


          onClick: () => { window.location.reload()}

         
        },
        {
          label: 'No',
          
        }
      ]
    });
  };




FinallyDone = (event) => {


this.submit();
event.preventDefault();
}


render(){
	
  
        	
		return(
              
              
              <div className="container mt-5">
              
             <Alert header="your form"  title="has been submitted" state={this.state.alert} />
            <form onSubmit={this.FinallyDone} >

  <div className="form-row">
   <div className="col-12">
  <div className="col-md-4 mb-5 mx-auto">

     
      <select className="form-control " id="-1"  
          
        onChange={(ev)=>this.Verify("matter",ev)}
      required >

         <option selected className="text-center">What's the matter</option>
        <option  className="text-center">Want to give me a Work</option>
        <option  className="text-center">Want to hire me</option>
        <option  className="text-center">Feedback</option>
        <option  className="text-center">Something Important</option>
        <option  className="text-center">other</option>
      </select>


      
    </div>
</div>

    <div className="col-md-4 mb-3">

      <label for="0">First name</label>
      <input type="text" className="form-control" id="0" placeholder="First name" 

        onChange={(ev)=>this.Verify("fname",ev)}  disabled={this.state.disabled[0]}
      required />
      <div className="valid-feedback">
        You really have a Nice name <p className="text-muted lead text-capitalize d-inline">{this.state.fname}</p> !
      </div>
       <div className="invalid-feedback">
        please enter your correct name!
      </div>
    </div>
    <div className="col-md-4 mb-3">
      <label for="1">Last name</label>
      <input type="text" className="form-control "
onChange={(ev)=>this.Verify("lname",ev)}
       id="1" placeholder="Last name" disabled={this.state.disabled[1]} required />
      <div className="valid-feedback">
        With a Nice Sirname <p className="text-muted lead text-capitalize d-inline">{this.state.lname}</p>!
      </div>
      <div className="invalid-feedback">
        your sirname Doesn't make sense!
      </div>
    </div>
    <div className="col-md-4 mb-3">
      <label for="2">Username</label>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text badge-dark" id="inputGroupPrepend3">#</span>
        </div>
        <input type="text" className="form-control " onChange={(ev)=>this.Verify("username",ev)} disabled={this.state.disabled[2]} id="2" placeholder="Username" aria-describedby="inputGroupPrepend3" required />
        <div className="valid-feedback">
          We will reconize you with @ <p className="text-muted lead text-capitalize d-inline"> {this.state.username} </p>
        </div>
        <div className="invalid-feedback">
          this Username already Exits!
        </div>
      </div>
    </div>
  </div>
  <div className="form-row">
    <div className="col-md-6 mb-3">
      <label for="3">City</label>
      <input type="text" className="form-control" onChange={(ev)=>this.Verify("city",ev)} disabled={this.state.disabled[3]} id="3" placeholder="City" required />
      <div className="valid-feedback">
        Oh..you live in <p className="text-muted lead text-capitalize d-inline">{this.state.city}</p>..its really nice
      </div>
      <div className="invalid-feedback">
        we didn't reconize this city
      </div>
    </div>
    <div className="col-md-3 mb-3">
      <label for="4">State</label>
      <input type="text" className="form-control " onChange={(ev)=>this.Verify("state",ev)} disabled={this.state.disabled[4]} id="4" placeholder="State" required />
      <div className="valid-feedback">
       <p className="text-muted lead text-capitalize d-inline"> {this.state.state} </p> is your state
      </div>
          <div className="invalid-feedback">
           please enter your state!
      </div>
    </div>
    <div className="col-md-3 mb-3">
      <label for="5">Zip</label>
      <input type="text" className="form-control " onChange={(ev)=>this.Verify("zip",ev)} disabled={this.state.disabled[5]} id="5" placeholder="Zip" required />
      <div className="valid-feedback">
        you are about to complete the form
      </div>
      <div className="invalid-feedback">
        Zip code doen't match!
      </div>
    </div>
  </div>
  <div className="form-group text-center mt-md-3">
    <div className="form-check">
      <input className="form-check-input " type="checkbox"  value="" id="6" disabled={this.state.disabled[6]} required />
      <label className="form-check-label" for="invalidCheck3">
        Agree to terms and conditions
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <Submiter className="text-center mt-md-3">
  <button className="btn btn-primary  " type="submit">Submit form</button>
       </Submiter>
</form>
           
           </div>

  );
}
}

const Submiter=styled.div`

margin-bottom:130px;
`