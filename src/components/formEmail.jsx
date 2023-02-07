import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

export function ContactUs({showModal}){
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_jrgoq11', 'template_kanos4h', form.current, '5fXEQ65edNxKlj3gG')
			.then((result) => {
					showModal()
					Swal.fire({
						title:'EXITO!',
						text: 'El correo se envio correctamente.',
						icon: 'success',
						confirmButtonText: 'OK!'
					})
			}, (error) => {
				alert('Ha ocurrido un error')
				Swal.fire({
					title:'ERROR!',
					text: 'Ha ocurrido un error en el proceso, porfavor intentar más tarde.',
					icon: 'error',
					confirmButtonText: 'Entendido'
				})
			});
	};

	return (
	<>
		<div 
			className='fixed top-0 left-0 right-0 z-10 w-screen h-screen bg-black bg-opacity-70'
			onClick={ () => showModal()}>
		</div>
		<form 
		ref={form}
		onSubmit={sendEmail}
		className='sm:w-[500px] sm:h-[600px] w-[300px] h-[600px] 
		bg-gradient-to-br from-pink-400 to-cyan-400
		fixed z-50 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
		flex flex-col gap-4 p-10 
		rounded-lg '>
		<div className='flex justify-end '>
			<span className='w-10 h-6 text-pink-200 font-bold
				border-2 rounded-lg  border-pink-200 cursor-pointer
				flex justify-center items-center 
				bg-gradient-to-br from-pink-400 to-cyan-400
				hover:shadow-md hover:shadow-pink-300 active:shadow-md active:shadow-pink-300
				transition-shadow duration-300 ease-in-out'
				onClick={ showModal }>&#x2715;</span>
		</div>

		<div className='w-full flex'>
			<label for='text' className='w-[80px] font-bold text-pink-200 rounded-l-lg bg-gradient-to-br from-pink-400 to-cyan-400 py-1 px-2 border-2 border-r-0 border-pink-200'>Nombre</label>
			<input type="text" name="user_name"  className='grow rounded-r-lg outline-none py-1 px-2 border-2 border-pink-200 focus:shadow-inner focus:shadow-pink-300'required/>
		</div>

		<div className='w-full flex'>
			<label for='email' className='w-[80px] font-bold text-pink-200 rounded-l-lg bg-gradient-to-br from-pink-400 to-cyan-400 py-1 px-2 border-2 border-r-0 border-pink-200'>Correo</label>
			<input type="email" name="user_email"  className='grow rounded-r-lg outline-none py-1 px-2 border-2 border-pink-200 focus:shadow-inner focus:shadow-pink-300' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required/>
		</div>

		<div className='w-full h-full flex flex-col'>
			<label for='message' className='font-bold text-center text-pink-200 rounded-t-lg bg-gradient-to-br from-pink-400 to-cyan-400 py-1 px-2 border-2 border-b-0 border-pink-200'>Mensaje</label>
			<textarea name="message" required className='resize-none h-full p-2 border-2 border-pink-200 outline-none focus:shadow-inner focus:shadow-pink-300'/>
			<button 
				type="submit" 
				value="Send" 
				className='grow text-pink-200 font-bold p-2
					bg-gradient-to-br from-pink-400 to-cyan-400
					border-2 rounded-b-lg border-pink-200 cursor-pointer
					hover:shadow-md hover:shadow-pink-300 active:shadow-md active:shadow-pink-300
					transition-shadow duration-300 ease-in-out'>
				Enviar
			</button>
		</div>
	</form>
	</>
		

	);
};
