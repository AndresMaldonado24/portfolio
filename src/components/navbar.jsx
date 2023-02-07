import React from "react";

export default function Navbar(){
	return(
		<nav className="w-screen h-10 fixed z-20 bg-black bg-opacity-30">
			<ul className="flex flex-row justify-center gap-5 pt-2">
				<li><a href="#About" className="font-bold opacity-30 text-white hover:opacity-100 hover:border-b-2 transition-all duration-300 ease-in-out">About</a></li>
				<li><a href="#Skills" className="font-bold opacity-30 text-white hover:opacity-100 hover:border-b-2 transition-all duration-300 ease-in-out">Skills</a></li>
				<li><a href="#Projects" className="font-bold opacity-30 text-white hover:opacity-100 hover:border-b-2 transition-all duration-300 ease-in-out">Projects</a></li>
			</ul>
		</nav>
	)
}