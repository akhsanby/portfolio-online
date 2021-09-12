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
			<div className="m-auto w-screen">
				<div className="my-5 w-1/2 m-auto">
					<span className="text-4xl font-bold after:content-[''] after:block after:w-0 after:h-1 after:bg-black after:transition-width after:duration-200 hover:after:w-60">Skills</span>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-1 w-1/2 m-auto">
					<ul>
						{skills.slice(0, 5).map((skill, index) => 
					  	<li key={index} className="text-xl">
					  		<FontAwesomeIcon icon={skill.icon} />
					  		<span className="p-2">{skill.name}</span>
					  	</li>
					  )}
					</ul>
					<ul>
						{skills.slice(5, 10).map((skill, index) => 
				  		<li key={index} className="text-xl">
				  			<FontAwesomeIcon icon={skill.icon} />
					  		<span className="p-2">{skill.name}</span>
				  		</li>
				  	)}
					</ul>
				</div>
			</div>
		)
	}
}