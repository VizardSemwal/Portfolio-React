
import React from 'react'
import Title from '../components/Title'
import { ProductConsumer } from '../Context'
import Charity from './Charity'
import Football from './Football'
import Travel from './Travel'
import styled from 'styled-components'








export default class AboutUs extends React.Component {

  render() {
    return (
      <div className='container '>
      <Title value="Hello" top="mt-5 p-5"  />
                   <blockquote className="blockquote text-center">
       <i>My Name is Vikas Semwal and I'm a <strong>Web Designer and Developer</strong>.I started 
designing as a Hobbie and later on it 
converted to my passion and now as a Full Time Carrer.
</i>  </blockquote> 

<p><small>Let me tell you more in detail,I started my carrer 3 years ago,
by learning Abode Xd and later on I realized that,I love Designing.
So,I learned more Software's like Photoshop,
Sketch and Illustrator.In addition to that,
As being a Student of Computer Science I already know Html , Css , JavaScript , Bootstrap , Java, Php , MySql , React etc.
and I'm Still learning...</small>
</p>



<footer class="text-muted text-center">"I beleive that, whatever we can <i>see from Our Naked eye's</i> come Under Design.
Some are made,<strong>Naturally and Some are Made by Us</strong>  "
</footer>

<p className="text-center mt-5"> - - - - - - - - - - - - - - - - - -</p>

<div>
<Title value="I am a Best Travel-campanion to travel with" top="mt-5 p-2 " />
 <div className="row">
  <ProductConsumer>
                {(value) =>{
                	return value.travel.map((item)=>{
                          
                		return(<Travel info={item}  />)
                	})
                }

                }

                 </ProductConsumer>
</div>




</div>




<div>
<Title value="I love to Play Football..even Played National" top="mt-5 p-2 " />
 <div className="row">
  <ProductConsumer>
                {(value) =>{
                	return value.football.map((item)=>{
                          
                		return(<Football info={item}  />)
                	})
                }

                }

                 </ProductConsumer>
</div>




</div>





<div>
<Title value="Half my saving i Give to needy People" top="mt-5 p-2 " />
 <div className="row">
  <ProductConsumer>
                {(value) =>{
                	return value.Charity.map((item)=>{
                          
                		return(<Charity info={item}  />)
                	})
                }

                }

                 </ProductConsumer>
</div>




</div>

      </div>
    );
  }
}