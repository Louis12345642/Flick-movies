import { defineStore } from 'pinia'

//export the variable with the state 
export const useFilm =defineStore('data',{
state:()=>({
    films:[{"name":"mkay_dev","country":"uganda","isMovie":false}]
}),
getters:{
    getSeries(){

        return []

    },
    getMovies(){

        return []
    },
    getTvShows(){

        return []

    }

},
actions:{
 async searchFilm(user_search:string){
const api_key =import.meta.env.VITE_API_KEY; 
const res =await fetch( `http://www.omdbapi.com/?apikey=${api_key}&s=${user_search}`);
const data = await res.json()

console.log(data)

 }
}
});