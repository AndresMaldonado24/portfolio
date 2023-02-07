import '../static/css/stylesheet.css';
import ProfilePic from '../static/img/profile_pic.jpg';
import Modal from './modal'

import { useState } from 'react';
import { ContactUs } from './formEmail';

export default function About(){

	const [showModal, setShowModal] = useState(false);

	return(
	<section id='About' className="h-screen bg-gradient-to-b from-violet-200 to-violet-300 flex justify-center items-center">
		<div id='about-container' className="w-11/12 h-5/6 bg-black bg-opacity-50 rounded-lg shadow-xl flex items-center justify-around sm:flex-row flex-col">
			<img className='sm:w-1/4 w-2/3 sm:h-3/12  rounded-tl-lg rounded-br-lg' src={ProfilePic} alt="Profile Picture" />
			<div className='sm:w-1/2 w-2/3 sm:h-4/5 flex flex-col gap-4 justify-center'>
				<h1 className='font-bold text-transparent lg:text-8xl md:text-6xl text-4xl bg-clip-text bg-gradient-to-br from-pink-400 to-cyan-400 overflow-visible'>
					Hi,I'am Andres Maldonado,
				</h1>
				<h1 className='font-extrabold text-transparent lg:text-6xl md:text-4xl text-2xl bg-clip-text bg-gradient-to-br from-pink-400 to-cyan-400'>
					Web Developer
				</h1>
				<h2 className='font-bold text-transparent lg:text-2xl md:text-xl bg-clip-text bg-gradient-to-br from-pink-400 to-cyan-400'>
					Front-End Developer / Back-End Developer
				</h2>
				<div className='mt-4 flex justify-center'>
				{
					showModal 
					&& 
					<Modal>
						<ContactUs showModal={() => setShowModal(!showModal)}/>
					</Modal>
				}
				<button 
					className="w-40 h-10 rounded-lg border-2
					border-purple-300 text-pink-200 font-extrabold bg-gradient-to-br from-pink-400 to-cyan-400
					hover:shadow-md hover:shadow-pink-300
					transition-shadow duration-300 ease-in-out"
					onClick={ () => setShowModal(!showModal)}>
					Contact me
				</button>
				</div>
			</div>
		</div>
	</section>
)}
