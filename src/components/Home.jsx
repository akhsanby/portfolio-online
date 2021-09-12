import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

export default class Home extends React.Component {
	render() {
		return(
			<div id="Home" className="container mx-auto my-auto">
			  <div className="row">
			  	<div className="col d-flex justify-content-end">
			      <img src="./src/pp.jpg" alt="akhsan" />
			    </div>
			    <div className="col d-flex justify-content-start">
			    	<div>
				      <h3>
				      	<span className="badge bg-primary">Hello I'm</span>
				      </h3>
				      <h1 className="font-bold">Akhsan Bayu</h1>
				      <h4>Front-End Developer</h4>
				      <div>
				      	<FontAwesomeIcon icon={faEnvelope}/>
				      	<span className="mx-2">akhsanby@gmail.com</span>
				      </div>
				      <div>
				      	<FontAwesomeIcon icon={faPhoneAlt}/>
				      	<span className="mx-2">+62 895401224170</span>
				      </div>
				      <div>
				      	<FontAwesomeIcon icon={faMapMarkerAlt}/>
				      	<span className="mx-2">Central Java, Indonesia</span>
				      </div>
			    	</div>
			    </div>
			  </div>
			</div>
		)
	}
}

const styles = {
	badge: {
		borderTopLeftRadius: "10px",
		borderTopRightRadius: "10px",
		borderBottomRightRadius: "10px"
	},
	img: {
		width: "15rem",
		height: "15rem",
		borderRadius: "50%"
	}
}