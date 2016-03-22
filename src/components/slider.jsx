import React from 'react';

class Slider extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		var divStyle = { backgroundIimage: 'url(images/slider/bg1.jpg)'};

		return(
		    <div id="main-slider" className="no-margin" >
		        <div className="carousel slide" data-ride="carousel" data-interval="2000">
		            <ol className="carousel-indicators">
		                <li data-target="#main-slider" data-slide-to="0" className="active"></li>
		                <li data-target="#main-slider" data-slide-to="1"></li>
		                <li data-target="#main-slider" data-slide-to="2"></li>
		            </ol>

		            <div className="carousel-inner">

		                <div className="item active" style={divStyle}>
		                    <div className="container">
		                        <div className="row slide-margin">
		                            <div className="col-sm-6">
		                                <div className="carousel-content">
		                                    <h1 className="animation animated-item-1">Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
		                                    <h2 className="animation animated-item-2">Accusantium doloremque laudantium totam rem aperiam, eaque ipsa...</h2>
		                                    <a className="btn-slide animation animated-item-3" href="#">Read More</a>
		                                </div>
		                            </div>

		                            <div className="col-sm-6 hidden-xs animation animated-item-4">
		                                <div className="slider-img">
		                                    <img src="images/slider/img1.png" className="img-responsive" />
		                                </div>
		                            </div>

		                        </div>
		                    </div>
		                </div>{/*item */}

		                <div className="item" style={{ "backgroundImage": "url(images/slider/bg2.jpg)" }}>
		                    <div className="container">
		                        <div className="row slide-margin">
		                            <div className="col-sm-6">
		                                <div className="carousel-content">
		                                    <h1 className="animation animated-item-1">Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
		                                    <h2 className="animation animated-item-2">Accusantium doloremque laudantium totam rem aperiam, eaque ipsa...</h2>
		                                    <a className="btn-slide animation animated-item-3" href="#">Read More</a>
		                                </div>
		                            </div>

		                            <div className="col-sm-6 hidden-xs animation animated-item-4">
		                                <div className="slider-img">
		                                    <img src="images/slider/img2.png" className="img-responsive" />
		                                </div>
		                            </div>

		                        </div>
		                    </div>
		                </div>{/*item */}

		                <div className="item">
		                    <div className="container">
		                        <div className="row slide-margin">
		                            <div className="col-sm-6">
		                                <div className="carousel-content">
		                                    <h1 className="animation animated-item-1">Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
		                                    <h2 className="animation animated-item-2">Accusantium doloremque laudantium totam rem aperiam, eaque ipsa...</h2>
		                                    <a className="btn-slide animation animated-item-3" href="#">Read More</a>
		                                </div>
		                            </div>
		                            <div className="col-sm-6 hidden-xs animation animated-item-4">
		                                <div className="slider-img">
		                                    <img src="images/slider/img3.png" className="img-responsive" />
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                </div>{/*item */}
		            </div>{/*carousel - inner*/}
		        </div>{/*carousel*/}

		        <a className="prev hidden-xs" href="#main-slider" data-slide="prev">
		            <i className="fa fa-chevron-left"></i>
		        </a>
		        <a className="next hidden-xs" href="#main-slider" data-slide="next">
		            <i className="fa fa-chevron-right"></i>
		        </a>
		    </div>
		);
	}
}

export default Slider;