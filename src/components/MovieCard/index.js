import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ el }) => {
	return (
		<div className='popular--card'>
			<Link to={`/detail/movie_detail/${el.id}`}>
				<img
					src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`}
					alt=''
				/>
			</Link>
			<h4>{el.title}</h4>
			<h5>{el.release_date}</h5>
		</div>
	)
}

export default MovieCard
