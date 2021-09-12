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
			<div className="m-auto w-screen">
				<div className="my-5 w-1/2 m-auto">
					<span className="text-4xl font-bold after:content-[''] after:block after:w-0 after:h-1 after:bg-black after:transition-width after:duration-200 hover:after:w-60">Awards</span>
				</div>
				<div className="w-1/2 m-auto">
					  { awards.map((award, index) => 
					  	<div key={index} className="text-xl">
					  		<FontAwesomeIcon icon={faAward}/>
					  		<span className="fs-5 p-2">{award}</span>
					  	</div>
					  )}
				</div>
			</div>
		)
	}
}