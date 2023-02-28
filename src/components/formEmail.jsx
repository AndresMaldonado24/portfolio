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
		bg-gradient-to-b from-neutral-200 to-neutral-300
		fixed z-50 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
		flex flex-col flex-nowrap gap-4 p-10 
		rounded-lg border-2 border-black'>
		<div className='flex justify-end '>
			<span className='w-10 h-6 text-black font-bold
				border-2 border-black rounded-lg cursor-pointer
				flex justify-center items-center bg-red-600
				hover:shadow-md hover:shadow-amber-600 active:shadow-md active:shadow-amber-600 
				transition-shadow duration-300 ease-in-out'
				onClick={ showModal }>&#x2715;</span>
		</div>

		<div className='w-full flex flex-col flex-nowrap'>
			<label htmlFor='text' className='font-bold text-center text-black rounded-t-lg bg-neutral-400 py-1 px-2 border-2 border-b-0 border-black'>Nombre</label>
			<input type="text" name="user_name"  className='rounded-b-lg outline-none py-1 px-2 border-2 border-black focus:shadow-inner focus:shadow-neutral-400' required/>
		</div>

		<div className='w-full flex flex-col flex-nowrap'>
			<label htmlFor='email'className='font-bold text-center text-black rounded-t-lg bg-neutral-400 py-1 px-2 border-2 border-b-0 border-black'>Correo</label>
			<input type="email" name="user_email"  className='rounded-b-lg outline-none py-1 px-2 border-2 border-black focus:shadow-inner focus:shadow-neutral-400' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required/>
		</div>

		<div className='w-full h-full flex flex-col'>
			<label htmlFor='message' className='font-bold text-center text-black rounded-t-lg bg-neutral-400 py-1 px-2 border-2 border-b-0 border-black'>Mensaje</label>
			<textarea name="message" required className='resize-none h-full p-2 border-2 border-black outline-none focus:shadow-inner focus:shadow-neutral-400'/>
			<button 
				type="submit" 
				value="Send" 
				className='grow text-black font-bold p-2
				bg-neutral-400 border-2 border-black border-t-0 rounded-b-lg cursor-pointer
					hover:shadow-md hover:shadow-neutral-400 active:shadow-md active:shadow-neutral-400
					transition-shadow duration-300 ease-in-out'>
				Enviar
			</button>
		</div>
	</form>
	</>
		

	);
};
