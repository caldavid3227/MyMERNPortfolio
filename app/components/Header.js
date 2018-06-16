import React from 'react';
import {connect} from' react-redux';

class Header extends React.Component{
	render(){
		return(
			<div>
				<div className="navUpper">
					<h1>Hello World!</h1>
				</div>
			</div>
			);
	};

}; 

export default(Header);