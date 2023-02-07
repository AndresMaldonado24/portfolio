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
		<section id='Skills' className="h-screen bg-gradient-to-b from-violet-300 to-violet-400 flex justify-center items-center">
			<div id='skills-contianer' className="w-11/12 h-5/6 bg-white bg-opacity-50 rounded-lg shadow-xl flex flex-col">
				<div className="w-full">
					<h1 className='font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-br from-pink-400 to-cyan-400 text-center p-4'>
						My Skills
					</h1>
				</div>
				<div className="grow border-t border-b border-purple-300">
					{content}
				</div>
				<div className="w-full h-20 flex justify-center items-center gap-2">
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
		if( skills === 'Frontend'){
			setActive(skills)
		}
		else if (skills === 'Backend'){
			setActive(skills)
		}
		else if (skills === 'Complementary'){
			setActive(skills)
		}
	}

	return(
		<button 
			className={`h-1/2 border-2 border-purple-300
			p-2 font-bold
			rounded-lg bg-gradient-to-br from-pink-400 to-cyan-400
			hover:shadow-md hover:shadow-pink-300
			transition-shadow duration-300 ease-in-out ` + (active.toLowerCase().includes(skills.toLowerCase()) ? 'text-cyan-300' : 'text-pink-200' )
			}
			onClick={ () => ChangeActive() }>{skills}</button>
	)
}
function LenguageIcon({source}){
	return(
		<img className='w-32 sm:w-40 bg-pink-200 bg-opacity-40 hover:bg-opacity-60 rounded-lg p-4' src={source} />
	)
}
function FrontendSkills(){
	return(
		<div className='grid grid-cols-2 gap-y-4 justify-items-center'>
			<h1 className='col-span-2 font-bold text-transparent text-2xl bg-clip-text bg-gradient-to-br from-pink-400 to-cyan-400 text-center p-4'>Frontend Programing Lenguage</h1>
			<LenguageIcon source={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"}/>
			<LenguageIcon source={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"}/>
			<LenguageIcon source={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"}/>
			<LenguageIcon source={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"}/>
			<LenguageIcon source={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg"}/>
			<LenguageIcon source={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"}/>
		</div>
	)
}
function BackendSkills(){
	return (
		<div className='grid grid-cols-2 gap-y-4 justify-items-center'>
			<h1 className='col-span-2 font-bold text-transparent text-2xl bg-clip-text bg-gradient-to-br from-pink-400 to-cyan-400 text-center p-4'>Backend Programing Lenguage</h1>
			<LenguageIcon source={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"}/>
			<LenguageIcon source={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"}/>
			<LenguageIcon source={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"}/>
			<LenguageIcon source={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"}/>
		</div>
	)
}
function ComplementarySkills(){
	return(
		<div className='grid grid-cols-2 gap-y-4 justify-items-center'>
			<h1 className='col-span-2 font-bold text-transparent text-2xl bg-clip-text bg-gradient-to-br from-pink-400 to-cyan-400 text-center p-4'>Complementary Programing Lenguage</h1>
			<LenguageIcon source={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"}/>
			<LenguageIcon source={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"}/>
		</div>
	)
}