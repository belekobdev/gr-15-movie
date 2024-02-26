import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { userImg } from './../../ActorUser'
import { Api_key } from './../../Api_key'

const Actors = ({ id }) => {
	const [actors, setActors] = useState([])
	function getActors() {
		axios(
			`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${Api_key}&language=en-US`
		).then(res => {
			console.log(res.data.cast)
			setActors(res.data.cast)
		})
	}
	useEffect(() => {
		getActors()
	}, [])
	return (
		<div id='actor'>
			<div className='container'>
				<div className='actor'>
					{actors.map(el => (
						<div className='actor--card'>
							{el.profile_path ? (
								<Link to={`/detail/person_detail/${el.id}`}>
									<img
										src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${el.profile_path}`}
										alt=''
									/>
								</Link>
							) : (
								<Link to={`/detail/person_detail/${el.id}`}>
									<img className='actor--card__user' src={userImg} alt='' />
								</Link>
							)}

							<h3>{el.name}</h3>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Actors
