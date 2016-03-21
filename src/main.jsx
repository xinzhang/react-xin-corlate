import React from 'react'
import {render} from 'react-dom'

import '../css/bootstrap.min.css';

var rootInstance = render((
		<div>
			<h2>test</h2>
		</div>
), document.getElementById('main'));
