import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

export default class Home extends React.Component {
	render() {
		const myIds = [
			{ icon: faEnvelope, string: "akhsanby@gmail.com" },
			{ icon: faPhoneAlt, string: "+62 895401224170" },
			{ icon: faMapMarkerAlt, string: "Central Java, Indonesia"}
		]

		return(
			<div id="Home" className="container mx-auto my-auto">
			  <div className="row">
			  	<div className="col d-flex justify-content-center gap-5">
			      <img src="./src/pp.jpg" alt="akhsan" />
			    	<div>
				      <h3><span className="badge bg-primary">Hello I'm</span></h3>
				      <h1 className="fw-bolder">Akhsan Bayu</h1>
				      <h4 className="fw-normal">Front-End Developer</h4>
				      {myIds.map((myId, index) => 
					      <div>
					      	<FontAwesomeIcon icon={myId.icon} color="black" />
					      	<span className="mx-2">{myId.string}</span>
					      </div>
				      )}
				      <div className="py-4">
				      	<a href="https://github.com/akhsanby" target="_blank">
				      		<FontAwesomeIcon icon={faGithub} size="2x" className="mx-2" color="black" />
				      	</a>
				      	<a href="https://www.linkedin.com/in/akhsanby/" target="_blank">
					      	<FontAwesomeIcon icon={faLinkedin} size="2x" className="mx-2" color="black" />
				      	</a>
				      </div>
			    	</div>
			    </div>
			  </div>
			</div>
		)
	}
}