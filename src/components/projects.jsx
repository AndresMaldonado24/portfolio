import { useEffect, useState } from "react"
import { Lenguage } from './lenguages'
import bannerToDoList from '../static/img/project-todolist.png'

export default function Projects(){

	const [project, setProject] = useState(null)
	const [active, setActive] = useState('ToDoList')

	useEffect( () => {
		if(active.toLowerCase() === 'todolist'){
			setProject(
				<DisplayProject 
				web={'https://andresmaldonado24.github.io/project-todolist/'} 
				source={bannerToDoList}
				title={'Lista de Tareas'}
				desc={'Aplicación de lista de tareas, la cual permite agregar tú propias tareas, eliminarlas y darlas por terminadas, de esta forma llevar un control de estas mismas.'}
				leng={['html','css','tailwind','react']}/>
			)
		}
	},[active])

	return(
		<section id='Projects' className="h-screen bg-gradient-to-b from-violet-400 to-violet-500 flex justify-center items-center">
			<div id='projects-container' className="w-11/12 h-5/6 bg-black bg-opacity-50 rounded-lg shadow-xl flex flex-col">
				<div className="w-full">
					<h1 className='font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-br from-pink-400 to-cyan-400 text-center p-4'>
						My Skills
					</h1>
				</div>
				<div className="grow border-t border-b border-purple-300 flex justify-center items-center">
					{
						project
					}
				</div>
				<div className="w-full h-20 flex justify-center items-center gap-2">
					<ButtonProject project={'ToDoList'} active={active} setActive={setActive}/>
				</div>
			</div>
		</section>
		)
}

function ButtonToProject({children}){
	return(
		<button className={`h-1/2 border-2 border-purple-300
		text-pink-200 p-2 font-bold
		rounded-lg bg-gradient-to-br from-pink-400 to-cyan-400
		hover:shadow-md hover:shadow-pink-300
		transition-shadow duration-300 ease-in-out `
		}
		>
			{children}
		</button>
	)
}
function ButtonProject({project, active, setActive}){

	const ChangeActive = () => {
		setActive(project)
	}


	return(
		<button className={`h-1/2 border-2 border-purple-300
		p-2 font-bold
		rounded-lg bg-gradient-to-br from-pink-400 to-cyan-400
		hover:shadow-md hover:shadow-pink-300
		transition-shadow duration-300 ease-in-out ` + (active.toLowerCase().includes(project.toLowerCase()) ? 'text-cyan-300' : 'text-pink-200' )
		}
		onClick={ () => ChangeActive() }>{project}</button>
	)
}
function LenguageIcon({source}){
	return(
		<img className='w-10 sm:w-20' src={source} />
	)
}
function DisplayProject({web, source, title, desc, leng}){
	return(
	<div className="flex sm:flex-row flex-col gap-2 p-4">
		<div className="max-w-md shadow-lg flex flow-row">
			<img src={source} alt="w-full" />
		</div>
		<div className="max-w-md rounded shadow-lg flex flow-row">
			<div className="bg-white bg-opacity-40 rounded-lg h-full w-full flex flex-col gap-4">
				<h1 className="text-4xl text-center '">{title}</h1>
				<p className="grow text-xl text-justify p-4">{desc}</p>
				<div className="flex flex-row flex-wrap justify-center">
					{
								leng.map( element =>{
									const x = Lenguage.find(item => item.name === element)
									return <LenguageIcon key={x.name} source={x.url}/>
								})
					}
				</div>
				<div className="flex justify-center h-20">
					<a href={web} target='_blank'>
						<ButtonToProject>Ver Proyecto</ButtonToProject>
					</a>
				</div>
			</div>
		</div>
	</div>
	)
}

