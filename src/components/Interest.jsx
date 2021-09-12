import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Interest extends React.Component {
	render() {
		return(
			<div className="m-auto w-screen">
				<div className="my-5 w-1/2 m-auto">
					<span className="text-4xl font-bold after:content-[''] after:block after:w-0 after:h-1 after:bg-black after:transition-width after:duration-200 hover:after:w-60">Interest</span>
				</div>
				<div className="w-1/2 m-auto">
					<div className="text-xl">Apart from being as programmer, i like watch movies, animes, and youtube. My fav movie genre is adventure, action, and scifi. My fav anime genre is slice of life, action, comedy, and scifi. My fav youtuber gaming is MiawAug because he can explain the game as well, easy to understand and most importantly he is not toxic.</div>
				</div>
			</div>
		)
	}
}