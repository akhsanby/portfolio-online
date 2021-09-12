import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Experience extends React.Component {
	render() {
		return(
			<div className="container mx-auto my-auto">
				<div className="row">
					<div className="col-8 offset-2">
					  <h2 className="mb-3">
					  	<span className="fw-bold">Experience</span>
				  	</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-8 offset-2">
						<ul class="list-group">
						  <li class="list-group-item">
								<p>
									<span className="d-block fs-5 fw-bold">Programming Club STMIK Bina Patria as Teacher</span>
									<span className="text-muted">2021 - Present</span>
								</p>
								<p>I act as a teacher at the programming club, and also share the knowledge that I have learned in college</p>	
						  </li>
						  <li class="list-group-item">
						  	<p>
									<span className="d-block fs-5 fw-bold">Himpunan Mahasiswa TI STMIK Bina Patria as Member</span>
									<span className="text-muted">2021 - Present</span>
								</p>
								<p>I act as an event organizer and engineer in the HIMTI organization</p>	
						  </li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}