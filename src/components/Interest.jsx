import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Interest extends React.Component {
	render() {
		return(
			<div className="container mx-auto my-auto">
				<div className="row">
					<div className="col-8 offset-2">
					  <h2 className="mb-3">
					  	<span className="fw-bold">Interest</span>
				  	</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-8 offset-2">
					  <p className="fs-5">Apart from being as programmer, i like watch movies, animes, and youtube. My fav movie genre is adventure, action, and scifi. My fav anime genre is slice of life, action, comedy, and scifi. My fav youtuber gaming is MiawAug because he can explain the game as well, easy to understand and most importantly he is not toxic.</p>
					</div>
				</div>
			</div>
		)
	}
}