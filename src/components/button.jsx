import React from 'react'
import {render} from 'react-dom'

class DefaultButton extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<button className="btn btn-primary" type="submit">
					<i className="glyphicon glyphicon-chevron-right"></i> {this.props.name}
				</button>
			</div>
		);
	}
}

export default DefaultButton;