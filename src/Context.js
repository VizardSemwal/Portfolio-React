import React,{Component} from 'react';
import {logos, DetailLogo,Appdesigns,WebDesigns,Football,Charity, Travel} from './Data';
const ProductContext =React.createContext();





class ProductProvider extends Component{
state={
	logos:[],
	football:Football,
	travel:Travel,
	Charity:Charity,
     Appdesigns:Appdesigns,
	detailLogo:DetailLogo,
	WebDesigns:WebDesigns,
     cart:[],
     modalOpen:false,
     modalProduct:DetailLogo,
     cartSubTotal:0,
     cartTax:0,
     cartTotal:0

}
getNewValue =(id,val) =>{
	let Currentvalue=id;
       

	
	let next=0;

	next=val?(Currentvalue-1) :(Currentvalue+1); 

	

if(next >= 0 &&  next <=11 )
  
{

	this.setState(()=>{
		return{
			cartTotal:next
		}
	})}



}
getValue =(id,val) =>{

	let Currentvalue=id;
       

	
	let next=0;

	next=val?(Currentvalue-1) :(Currentvalue+1); 

	

if(next >= 0 &&  next <=23 )
  
{

	this.setState(()=>{
		return{
			cartTax:next
		}
	})}


}

componentDidMount(){
	this.setProducts();
}

getItem = (id) =>{
	const logo =this.state.logos.find(item => item.id === id);
	return logo;
}; 


getApp = (id) =>{
	const Appdesigns =this.state.Appdesigns.find(item => item.id === id);
	return Appdesigns;
}; 


getDesign = (id) =>{
	const WebDesign =this.state.WebDesigns.find(item => item.id === id);
	return WebDesign;
}; 



 LikedOnce = id =>{
	let tempdetail=[...this.state.logos];
    const logo=tempdetail.indexOf(this.getItem(id));
    const variable=tempdetail[logo];


      if(variable.liked){
            variable.liked=false;  	
      }
      else{
      	variable.liked=true;
      }
    

    console.log(variable);

        
   this.setState(()=>{
        	return{
        		logos:tempdetail
        	}
        })

    
}








setProducts = () =>{
	let tempLogos=[];
	logos.forEach(item => {
		const singleItem ={...item};
		tempLogos=[...tempLogos,singleItem];
	});
	this.setState(()=>{
		return{logos: tempLogos};
	});
};







openModal = (id,val) =>{

	if(val === false)
	{
	const logo =this.getItem(id);
	this.setState(() =>{
		return {detailLogo:logo,modalOpen:true}
	})

}

else if(val == null)
{
 
const web =this.getDesign(id);
	this.setState(() =>{
		return {detailLogo:web,modalOpen:true}
	})

}
else{
	const app =this.getApp(id);
	this.setState(() =>{
		return {detailLogo:app,modalOpen:true}
	})
}
}


closeModal = () =>{
this.setState(() => 
{
	return {modalOpen:false}
})
}





render(){
	return( 
       <ProductContext.Provider value={{

      ...this.state,
      handleDetail:this.handleDetail,
      LikedOnce:this.LikedOnce,
      openModal:this.openModal,
      closeModal:this.closeModal,
      getValue:this.getValue,
       getNewValue:this.getNewValue
       }}> 
        {this.props.children}
       </ProductContext.Provider>

		)
}

}
const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};