import React from 'react';

class Carousel extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="carousel-example-generic" className="carousel slide" data-ride="carousel" data-interval="2000">
			  <ol className="carousel-indicators">
			    <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
			    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
			    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
			    <li data-target="#carousel-example-generic" data-slide-to="3"></li>
			  </ol>

			  <div className="carousel-inner">
				<div className="item active">
                    <img src="./images/slider/slider1.png" alt="First Slide" />
                </div>
                <div className="item">
                    <img src="./images/slider/slider2.png" alt="Second Slide" />
                </div>
                <div className="item">
                    <img src="./images/slider/slider4.jpg" alt="Third Slide" />
                </div>
                <div className="item">
                    <img src="./images/slider/slider5.jpg" alt="Third Slide" />
                </div>
			  </div>

			  <a className="left carousel-control" href="#carousel-example-generic" data-slide="prev">
			    <span className="glyphicon glyphicon-chevron-left"></span>
			  </a>

			  <a className="right carousel-control" href="#carousel-example-generic" data-slide="next">
			    <span className="glyphicon glyphicon-chevron-right"></span>
			  </a>
			</div>
		);
	}
}

export default Carousel;
