import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Experience extends React.Component {
	render() {
		return(
			<div className="m-auto">
				<div className="grid grid-cols-1 w-3/4 m-auto">
					<span className="my-5 text-4xl font-bold after:content-[''] after:block after:w-0 after:h-1 after:bg-black after:transition-width after:duration-200 hover:after:w-60">Experience</span>
				</div>
				<div className="grid grid-rows-1 gap-5 w-3/4 m-auto">
					<div className="text-xl">
						<span className="block text-xl font-bold">Programming Club STMIK Bina Patria as Teacher</span>
						<span className="block text-lg font-medium text-gray-700">2021 - Present</span>
						<span>I act as a teacher at the programming club, and also share the knowledge that I have learned in college</span>
					</div>
					<div className="text-xl">
						<span className="block text-xl font-bold">Himpunan Mahasiswa TI STMIK Bina Patria as Member</span>
						<span className="block text-lg font-medium text-gray-700">2021 - Present</span>
						<span>I act as an event organizer and engineer in the HIMTI organization</span>
					</div>
				</div>
			</div>
		)
	}
}