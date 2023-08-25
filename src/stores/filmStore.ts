import { defineStore } from 'pinia'
import { onMounted } from 'vue';
import {computed } from 'vue'
import {ref} from 'vue'
// import { beforeMount} from 'vue';



export const useFilm =defineStore("Films",()=>{
    let Films:any =[]
   const   getSeries= computed(()=>{
    return "hello series"
   })
 


    async function  searchFilm(user_search:any){
        const api_key =import.meta.env.VITE_API_KEY; 
        const res =await fetch( `http://www.omdbapi.com/?apikey=${api_key}&s=${user_search}&plot=full`);
        const data = await res.json()
        Films =data.Search
        console.log(Films)
    
    }


return{searchFilm,Films,getSeries}

});
