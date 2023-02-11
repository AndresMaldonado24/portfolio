import { useEffect, useState } from "react"
import { Lenguage } from "./lenguages"
import { ListOfProjects } from "./listOfProjects"

export default function Projects(){

	const [project, setProject] = useState(null)
	const [active, setActive] = useState('')

	useEffect( () => {
			if(active === ''){
				const first = ListOfProjects[0]
				setActive(first.title)
				setProject(
					<DisplayProject 
						web = {first.web}
						repo = {first.repo}
						title = {first.title}
						desc = {first.desc}
						lang = {first.lang}/>
				)				
			}else{
				const activeProject = ListOfProjects.find( element => element.title.trim().toLowerCase() === active.trim().toLowerCase())
				setActive(activeProject.title)
				setProject(
					<DisplayProject 
						web = {activeProject.web}
						repo = {activeProject.repo}
						title = {activeProject.title}
						desc = {activeProject.desc}
						lang = {activeProject.lang}/>
				)
			}
		},[active])

	return(
		<section id='Projects' className="h-screen bg-gradient-to-b from-neutral-400 to-neutral-500 flex justify-center items-center">
			<div id='projects-container' className="w-11/12 h-5/6 bg-black bg-opacity-50 rounded-lg shadow-xl flex flex-col">
				<div className="w-full">
					<h1 className='font-bold text-neutral-300 text-4xl bg-clip-text text-center p-4'>
						My Skills
					</h1>
				</div>
				<div className="grow border-t-2 border-b-2 border-black flex justify-center items-center">
					{
						project
					}
				</div>
				<div className="w-full h-20 flex justify-center items-center gap-2 overflow-x-auto">
					{
						ListOfProjects.map( project => {
							return <ButtonProject key={project.id} project={project.title} active={active} setActive={setActive}/>
						})
					}
					
				</div>
			</div>
		</section>
		)
}

function ButtonLinks({children, link}){
	return(
		<a href={link} target='_blank'>
			<button className={`h-1/2 border-2 border-black p-2 font-bold
			rounded-lg bg-gradient-to-br from-neutral-200 to-neutral-400
			hover:shadow-md hover:shadow-neutral-200 active:shadow-md active:shadow-neutral-200
			transition-shadow duration-300 ease-in-out `
			}>
				{children}
			</button>
		</a>
	)
}
function ButtonProject({project, active, setActive}){

	const ChangeActive = () => {
		setActive(project)
	}

	return(
		<button className={`h-1/2 border-2 border-black	p-2 font-bold
		rounded-lg bg-gradient-to-br from-neutral-200 to-neutral-400
		hover:shadow-md hover:shadow-neutral-200 active:shadow-md active:shadow-neutral-200
		transition-shadow duration-300 ease-in-out ` + ((active.trim().toLowerCase() === project.trim().toLowerCase()) ? 'text-black' : 'text-neutral-600' )
		}
		onClick={ () => ChangeActive() }>{project}</button>
	)
}
function LenguageIcon({source}){
	return(
		<img className='w-10 sm:w-20' src={source} />
	)
}
function DisplayProject({web, repo, title, desc, lang}){
	return(
		<div className="max-w-lg rounded-lg p-4">
			<div className="bg-neutral-200 bg-opacity-60 rounded-lg h-full w-full flex flex-col gap-4 border-2 border-black p-4">
				<h1 className="text-4xl text-center">{title}</h1>
				<p className="grow text-xl text-justify p-4">{desc}</p>
				<div className="flex flex-row flex-wrap justify-center">
					{
								lang.map( element =>{
									const x = Lenguage.find(item => item.name === element)
									return <LenguageIcon key={x.name} source={x.url}/>
								})
					}
				</div>
				<div className="flex justify-center gap-2 h-20">
					<ButtonLinks link={web}>Ver Proyecto</ButtonLinks>
					<ButtonLinks link={repo}>Ver Repositorio</ButtonLinks>
				</div>
			</div>
		</div>
	)
}

