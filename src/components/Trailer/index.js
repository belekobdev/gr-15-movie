import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Api_key } from './../../Api_key'

const Trailer = ({ id }) => {
	const [trailer, setTrailer] = useState([])

	function getTrailer() {
		axios(
			`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${Api_key}&language=en-US`
		).then(res => {
			console.log(res.data.results)
			setTrailer(res.data.results)
		})
	}

	useEffect(() => {
		getTrailer()
	}, [])

	return (
		<div
			style={{
				background: '#181818',
				paddingTop: '60px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				flexWrap: 'wrap',
			}}
		>
			{trailer.slice(0, 4).map(el => (
				<iframe
					style={{
						margin: '40px ',
						borderRadius: '20px',
					}}
					width='614'
					height='314'
					src={`https://www.youtube.com/embed/${el.key}`}
					title=''
					frameborder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					allowfullscreen
				></iframe>
			))}
		</div>
	)
}

export default Trailer
