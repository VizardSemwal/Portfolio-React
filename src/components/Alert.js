import React from 'react'


export default class Alert extends React.Component{




	render()
	{
		const {header,title,state}=this.props;
		if(state === true)
		{
		return(

                   
				<div className="alert alert-success text-center alert-dismissible fade show " role="alert">
				  <strong>{header}!</strong> {title}.
				  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
				    <span aria-hidden="true">&times;</span>
				  </button>
				</div>

			)
	}
	else{
		return(

                   
				<div> </div>
			)

	}
	}
}