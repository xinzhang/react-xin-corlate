import React from 'react';

import TopBar from './topBar.jsx';
import Navigation from './navigation.jsx';

class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			    <div id="header">
       				<TopBar />
       				<Navigation />		
    			</div>
		);
	}
}

export default Header;