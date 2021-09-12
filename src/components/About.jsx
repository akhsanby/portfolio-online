import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class About extends React.Component {
	render() {
		return(
			<div className="m-auto">
				<div className="grid grid-cols-1 w-1/2 m-auto">
					<span className="my-5 text-4xl font-bold after:content-[''] after:block after:w-0 after:h-1 after:bg-black after:transition-width after:duration-200 hover:after:w-60">About Me</span>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-1/2 m-auto">
					<div className="text-xl">I am an Informatics Engineering student from the STMIK Bina Patria. I like to learn new things about technology, programming, IOT, animes, movies and gaming.</div>
					<div className="text-xl">I am also tech enthusiasm and weebs who like coding. I'm prefer to Frontend, although before that I was learn about Backend. I hope, my dream can relized as Software Engineer</div>
				</div>
			</div>
		)
	}
}