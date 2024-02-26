import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Api_key } from '../../Api_key'

const PersonMovies = ({ id }) => {
	const [film, setFilm] = useState([])

	function getPersonMovies() {
		axios(
			`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${Api_key}&language=en-US`
		).then(res => {
			console.log(res.data.cast)
			setFilm(res.data.cast)
		})
	}

	useEffect(() => {
		getPersonMovies()
	}, [])

	return (
		<div id='personMovies'>
			<div className='container'>
				<div className='personMovies'>
					{film.map(el => (
						<div className='personMovies--card'>
							<img
								src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`}
								alt=''
							/>
							<h5>{el.title}</h5>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default PersonMovies
