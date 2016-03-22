import React from 'react'
import {render} from 'react-dom'

import '../web/css/bootstrap.min.css';
import '../web/css/font-awesome.css';


import DefaultButton from './components/button.jsx';
import Carousel from './components/carousel.jsx';

var rootInstance = render((
		<div>
			<DefaultButton name="light bulb" />
			test font - awesome <span className="fa fa-repeat">abc</span>
			<Carousel />
		</div>
), document.getElementById('main'));
