import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward } from '@fortawesome/free-solid-svg-icons'

export default class Awards extends React.Component {
	render() {
		const awards = [
			"Lorem ipsum dolor sit amet",
			"Lorem ipsum dolor sit amet",
			"Lorem ipsum dolor sit amet"
		]
		return(
			<div className="container mx-auto my-auto">
				<div className="row">
					<div className="col-8 offset-2">
					  <h2 className="mb-3">
					  	<span className="fw-bold">Awards</span>
				  	</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-8 offset-2 lh-1">
					  { awards.map((award, index) => 
					  	<p key={index}>
					  		<FontAwesomeIcon icon={faAward}/>
					  		<span className="fs-5 p-2">{award}</span>
					  	</p>
					  )}
					</div>
				</div>
			</div>
		)
	}
}