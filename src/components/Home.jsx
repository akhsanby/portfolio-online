import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

export default class Home extends React.Component {
	render() {
		const identity1 = [
			{ icon: faEnvelope, string: "akhsanby@gmail.com" },
			{ icon: faPhoneAlt, string: "+62 895401224170" },
			{ icon: faMapMarkerAlt, string: "Central Java, Indonesia" }
		]

		const identity2 = [
			{ icon: faGithub, link: "https://github.com/akhsanby" },
			{ icon: faLinkedin, link: "https://www.linkedin.com/in/akhsanby" }
		]

		return(
			<div className="m-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div><img className="w-40 h-40 md:w-60 md:h-60 rounded-full" src="./src/pp.jpg" alt="akhsan" /></div>
					<div className="p-4">
			      <h3><span className="bg-blue-500 py-2 px-4 rounded-r-xl rounded-tl-xl text-lg font-bold text-white">Hello, I'm</span></h3>
			      <h1 className="text-4xl font-bold mt-3">Akhsan Bayu</h1>
			      <h4 className="text-xl font-semibold">Front-End Developer</h4>
			      {identity1.map((id1, index) => 
				      <div key={index}>
				      	<FontAwesomeIcon icon={id1.icon} color="black" />
				      	<span className="mx-2 font-medium text-md">{id1.string}</span>
				      </div>
			      )}
			      <div className="py-3">
			      {identity2.map((id2, index) => 
			      	<a key={index} href={id2.link} target="_blank">
			      		<FontAwesomeIcon icon={id2.icon} size="2x" className="mx-2" color="black" />
			      	</a>
			      )}
			      </div>
		    	</div>
				</div>
			</div>
		)
	}
}

function backup() {
	const myIds = [
		{ icon: faEnvelope, string: "akhsanby@gmail.com" },
		{ icon: faPhoneAlt, string: "+62 895401224170" },
		{ icon: faMapMarkerAlt, string: "Central Java, Indonesia"}
	]
	return(
		<div id="Home" className="m-auto">
		  <div className="row">
		  	<div className="col d-flex justify-content-center gap-5">
		      
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