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
	//TODO: Agregar funcionalidad de cierre de modal, boton y fondo negro.
	return (
		
		
			<form 
				ref={form}
				onSubmit={sendEmail}
				className='sm:w-[500px] sm:h-[600px] w-[300px] h-[600px] 
				bg-gradient-to-b from-pink-400 to-cyan-400
				fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
				flex flex-col gap-4 p-10 
				rounded-lg'>
				<div className='flex justify-end '>
					<span className='w-10 h-6 text-white border-2 rounded-lg
					flex justify-center items-center
				bg-violet-300 border-white  font-bold
				hover:bg-white hover:text-violet-300 hover:border-violet-300 hover:cursor-pointer
				active:bg-white active:text-violet-300 active:border-violet-300'
					onClick={ showModal }>&#x2715;</span>
				</div>
				<label className='font-bold text-white'>
					Nombre
				</label>
				<input type="text" name="user_name"  className='rounded-lg px-2'required/>
				<label className='font-bold text-white'>
					Correo
				</label>
				<input type="email" name="user_email"  className='rounded-lg px-2' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required/>
				<label className='font-bold text-white'>
					Mensaje
				</label>
				<textarea name="message" required className='resize-none rounded-lg h-1/2 p-2'/>
				<button type="submit" value="Send" className='w-1/2 mx-auto rounded-lg bg-violet-300 border-2 border-white text-white font-bold
				 hover:bg-white hover:text-violet-300 hover:border-violet-300
				 active:bg-white active:text-violet-300 active:border-violet-300'>
					Enviar
				</button>
		</form>

	);
};
