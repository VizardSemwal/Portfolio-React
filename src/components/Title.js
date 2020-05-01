import React,{Component} from 'react';
import styled from 'styled-components';

const Icon=styled.i`

transition:all 2s linear;

&:hover{


 
  animation: shake 1s;

 
  animation-iteration-count: infinite;
}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -1px) rotate(-1deg); }

}

`




export default class Title extends Component{


	render(){
    const {value ,top}=this.props;
let k=`text-center col-10 mx-auto ${top}`;
	return(

        <div className={k}>
        <h1 className="display-4">{value} <Icon className="far fa-grin-beam"  />  </h1>

        </div>

		)

}	}
