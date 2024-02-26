import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Api_key } from '../../Api_key'
import { userImg } from '../../ActorUser'
import PersonMovies from '../PersonMovies'

const PersonDetail = () => {
	const [person, setPerson] = useState({})
	const { personID } = useParams()
	function getPersonDetails() {
		axios(
			`https://api.themoviedb.org/3/person/${personID}?api_key=${Api_key}&language$=en-US`
		).then(res => {
			console.log(res.data)
			setPerson(res.data)
		})
	}
	useEffect(() => {
		getPersonDetails()
	}, [])
	let { profile_path, name, birthday, biography, popularity, place_of_birth } =
		person
	return (
		<div id='personDetail'>
			<div className='container'>
				<div className='person'>
					{
						profile_path ?			<img
						src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${profile_path}`}
						alt=''
					/> :
						
						<img className='actor--card__user' src={userImg} alt='' /> 
					
					}


			
				<div className='person--text'>	
				<h1>{name}</h1>
					<span>{birthday}</span>
					<h3>{place_of_birth}</h3>
					{  biography ?<p>{biography}</p> : <p>Информации нету!</p>}

					<span>{Math.round(popularity)}%</span>
				</div>
				</div>
			</div>
			<PersonMovies id={personID} />
		</div>
	)
}

export default PersonDetail
