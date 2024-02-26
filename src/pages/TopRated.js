import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Api_key } from '../Api_key'
import MovieCard from '../components/MovieCard'

const TopRated = () => {
	const [topRated, setTopRated] = useState([])

	function getTopRated() {
		axios(
			` https://api.themoviedb.org/3/movie/top_rated?api_key=${Api_key}&language=en-US&page=1`
		).then(res => {
			console.log(res.data.results)
			setTopRated(res.data.results)
		})
	}

	useEffect(() => {
		getTopRated()
	}, [])

	return (
		<div id='popular'>
			<div className='container'>
				<div className='popular'>
					{topRated.map(el => (
						<MovieCard el={el} />
					))}
				</div>
			</div>
		</div>
	)
}

export default TopRated
