import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from 'react-slick'

export default function Projects(){
	
	const settings = {
		dots: false,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		lazyLoad: true		
	};


	return(
		<section id='Projects' className="h-screen bg-gradient-to-b from-violet-400 to-violet-500 flex justify-center items-center">
			<div id='projects-container' className="w-11/12 h-5/6 bg-black bg-opacity-50 rounded-lg shadow-xl flex items-center justify-center flex-col gap-5">
				<h1 className='font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-b from-pink-400 to-cyan-400 overflow-visible'>
					My Projects
				</h1>
				<div className="sm:h-5/6 h-3/4 pt-10 flex justify-center items-center">
					<div className="sm:w-11/12 sm:h-4/5 w-60 h-60 bg-white bg-opacity-50 rounded-lg flex justify-center items-center">
						<Slider {...settings}>
						</Slider>
					</div>
				</div>

			</div>
		</section>
		)
}