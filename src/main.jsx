import React from 'react'
import {render} from 'react-dom'

import '../web/css/bootstrap.min.css';
import '../web/css/font-awesome.css';

import '../web/css/animate.min.css';
import '../web/css/prettyPhoto.css';
import '../web/css/main.css';
import '../web/css/responsive.css';

import DefaultButton from './components/button.jsx';
import Carousel from './components/carousel.jsx';
import Header from './components/header.jsx';
import Slider from './components/slider.jsx';

var rootInstance = render((
		<div>
			<Header />
			<Slider />
		</div>
), document.getElementById('main'));
