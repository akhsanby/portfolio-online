import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class About extends React.Component {
	render() {
		return(
			<div className="container mx-auto my-auto">
			  <div className="row">
					<div className="col-8 offset-2">
					  <h2 className="mb-3">
					  	<span className="fw-bold">About Me</span>
				  	</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-4 offset-2">
						<p className="fs-5">I am an Informatics Engineering student from the STMIK Bina Patria. I like to learn new things about technology, programming, IOT, animes, movies and gaming.</p>
					</div>
					<div className="col-4">
						<p className="fs-5">I am also tech enthusiasm and weebs who like coding. I'm prefer to Frontend, although before that I was learn about Backend. I hope, my dream can relized as Software Engineer</p>
					</div>
				</div>
			</div>
		)
	}
}