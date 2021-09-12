import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
	faHtml5, 
	faCss3Alt, 
	faSass, 
	faPhp, 
	faJsSquare, 
	faLaravel, 
	faFreeCodeCamp, 
	faReact, 
	faVuejs 
} from '@fortawesome/free-brands-svg-icons'

export default class Skills extends React.Component {
	render() {
		const skills = [
			{ name: "HTML", icon: faHtml5 }, 
			{ name: "CSS", icon: faCss3Alt }, 
			{ name: "SCSS", icon: faSass }, 
			{ name: "PHP", icon: faPhp }, 
			{ name: "Javascript", icon: faJsSquare }, 
			{ name: "CodeIgniter", icon: faFreeCodeCamp }, 
			{ name: "Laravel", icon: faLaravel }, 
			{ name: "ReactJS", icon: faReact }, 
			{ name: "React Native", icon: faReact }, 
			{ name: "VueJS", icon: faVuejs }
		]
		return(
			<div className="container mx-auto my-auto">
				<div className="row">
					<div className="col-8 offset-2">
					  <h2 className="mb-3">
					  	<span className="fw-bold">Expertise & Skills</span>
				  	</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-4 offset-2">
						<ul className="list-group list-group-flush">
						  {skills.slice(0, 5).map((skill, index) => 
						  	<li key={index} className="list-group-item">
						  		<FontAwesomeIcon icon={skill.icon} />
						  		<span className="p-2">{skill.name}</span>
						  	</li>
						  )}
					  </ul>
					</div>
					<div className="col-4">
						<ul className="list-group list-group-flush">
						  {skills.slice(5, 10).map((skill, index) => 
					  		<li key={index} className="list-group-item">
					  			<FontAwesomeIcon icon={skill.icon} />
						  		<span className="p-2">{skill.name}</span>
					  		</li>
					  	)}
						</ul>
					</div>
				</div>
			</div>
		)
	}
}