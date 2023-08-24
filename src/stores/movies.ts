import { defineStore } from 'pinia'

//export the variable with the state 
export const useMovies =defineStore('data',{
state:()=>({
    movies:[{"name":"mkay_dev","country":"uganda","isMovie":false}]
}),
getters:{
    series(){
    return this.movies.filter(t=>{t.isMovie})
    }
},
actions:{
 searchMovie(user_search){
    this.movies.push(user_search)

 }
}
});