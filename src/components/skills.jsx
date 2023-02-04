import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from 'react-slick'

import '../static/css/stylesheet.css'

export default  function Skills(){

	const settings = {
		dots: false,
		infinite: true,
		speed: 1000,
		slidesToShow: 2,
		slidesToScroll: 2,
		autoplay: true,
		lazyLoad: true		
	};

	return(
		<section id='Skills' className="h-screen bg-gradient-to-b from-violet-300 to-violet-400 flex justify-center items-center">
			<div id='skills-contianer' className="w-11/12 h-5/6 bg-black bg-opacity-50 rounded-lg shadow-xl">
				<div className="w-full flex justify-center sm:mt-10 mt-2">
					<h1 className='font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-b from-pink-400 to-cyan-400 overflow-visible'>
						My Skills
					</h1>
				</div>
				<div className="sm:h-5/6 h-3/4 pt-10 flex justify-center items-center">					
					<div className="sm:w-11/12 sm:h-4/5 w-60 h-60 bg-white bg-opacity-30 rounded-lg shadow-xl pt-20">
					<Slider {...settings}>
								<img className='sm:w-60 sm:h-60' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
								<img className='sm:w-60 sm:h-60' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
								<img className='sm:w-60 sm:h-60' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" />
								<img className='sm:w-60 sm:h-60' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
								<img className='sm:w-60 sm:h-60' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg" />
								<img className='sm:w-60 sm:h-60' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
								<img className='sm:w-60 sm:h-60' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
								<img className='sm:w-60 sm:h-60' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" />
								<img className='sm:w-60 sm:h-60' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />          
								<img className='sm:w-60 sm:h-60' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
								<img className='sm:w-60 sm:h-60' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />
								<img className='sm:w-60 sm:h-60' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" />    
							</Slider>
					</div>					
				</div>				
			</div>
		</section>
	)
}