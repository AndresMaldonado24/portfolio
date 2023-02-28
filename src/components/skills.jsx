import { useState, useEffect} from 'react'
import '../static/css/stylesheet.css'

export default  function Skills(){

	const [content, setContent ] = useState(null)
	const [active, setActive] = useState('Frontend')

	useEffect( () => {
		if( active === 'Frontend'){
			setContent(<FrontendSkills/>)
		}
		else if (active === 'Backend'){
			setContent(<BackendSkills/>)
		}
		else if (active === 'Complementary'){
			setContent(<ComplementarySkills/>)
		}
	},[active])

	return(
		<section id='Skills' className="h-screen bg-gradient-to-b from-neutral-300 to-neutral-400 flex justify-center items-center">
			<div id='skills-contianer' className="w-11/12 h-5/6 bg-white bg-opacity-50 rounded-lg shadow-xl flex flex-col border-2 border-black">
				<div className="w-full">
					<h1 className='font-bold text-neutral-300 text-4xl text-center p-4'>
						My Skills
					</h1>
				</div>
				<div className="grow border-t-2 border-b-2 border-black flex flex-row flex-wrap justify-center">
					{content}
				</div>
				<div className="w-full h-20 flex justify-center items-center gap-2 overflow-x-auto">
					<ButtonSkills skills={'Frontend'} active={active} setActive={setActive} />
					<ButtonSkills skills={'Backend'} active={active} setActive={setActive} />
					<ButtonSkills skills={'Complementary'} active={active} setActive={setActive} />
				</div>				
			</div>
		</section>
	)
}
function ButtonSkills({skills, active, setActive}){

	const ChangeActive = () => {
		setActive(skills)
	}

	return(
		<button 
			className={`h-1/2 border-2 border-black	p-2 font-bold
			rounded-lg bg-gradient-to-br from-neutral-200 to-neutral-400
			hover:shadow-md hover:shadow-neutral-200 active:shadow-md active:shadow-neutral-200
			transition-shadow duration-300 ease-in-out ` + (active.toLowerCase().includes(skills.toLowerCase()) ? 'text-black' : 'text-neutral-600' )
			}
			onClick={ () => ChangeActive() }>{skills}</button>
	)
}
function LenguageIcon({source}){
	return(
		<img className='w-28 sm:w-44 bg-neutral-100 bg-opacity-40 hover:bg-opacity-60 active:bg-opacity-60 rounded-lg p-4' src={source} />
	)
}
function FrontendSkills(){
	return(
		<div className='flex flex-col h-full'>
		<h1 className='font-bold text-neutral-300 text-2xl text-center p-2'>Frontend Programing Lenguage</h1>
		<div className='flex flex-wrap gap-4 justify-center items-center m-auto p-4'>
			<LenguageIcon source={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"}/>
			<LenguageIcon source={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"}/>
			<LenguageIcon source={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"}/>
			<LenguageIcon source={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"}/>
			<LenguageIcon source={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg"}/>
			<LenguageIcon source={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"}/>
		</div>
		</div>
	)
}
function BackendSkills(){
	return (
	<div className='flex flex-col h-full'>
		<h1 className='font-bold text-neutral-300 text-2xl bg-clip-text text-center p-2'>Backend Programing Lenguage</h1>
		<div className='flex flex-wrap gap-4 justify-center items-center m-auto p-4'>			
			<LenguageIcon source={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"}/>
			<LenguageIcon source={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"}/>
			<LenguageIcon source={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"}/>
			<LenguageIcon source={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"}/>
		</div>
	</div>
	)
}
function ComplementarySkills(){
	return(
		<div className='flex flex-col h-full'>
			<h1 className='font-bold text-neutral-300 text-2xl bg-clip-text text-center p-2'>Complementary Programing Lenguage</h1>
			<div className='flex flex-wrap gap-4 justify-center items-center m-auto p-4'>			
			<LenguageIcon source={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"}/>
			<LenguageIcon source={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"}/>
			<LenguageIcon source={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"}/>
			</div>
		</div>
	)
}