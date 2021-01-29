import axios from 'axios';
// const axios = require('axios');

const API_KEY = '92155c2a';
const API_HOST = 'http://www.omdbapi.com';

export const getMovie = async function(title){
   let data = await axios({ 
        method: 'get',
        url:`${API_HOST}/?apikey=${API_KEY}&t=${title}`,
        
    })
    return data;
}

