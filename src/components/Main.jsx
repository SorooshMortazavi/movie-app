import React, { useEffect, useState } from 'react';

import {getMovie} from '../api/omdbapi'

import Title from './Title';
import MovieInfo from './MovieInfo';
import Search from './Search';



export default function Main() {

    const [movieName, setMovieName] = useState('F');
    const [movieData,setMovieData]= useState({})

    useEffect(async ()=>{
        const res = await getMovie(movieName)
        setMovieData(res.data)

    },[movieName])

    const handleSearch = (searchText) => setMovieName(searchText);
     

    return (
        <div>
            <Title />
            <Search handleSearch={handleSearch} />
            <MovieInfo data={movieData} />
        </div>
    )
}
