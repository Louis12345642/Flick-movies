import { defineStore } from 'pinia'
import { onMounted } from 'vue';
import {computed } from 'vue'
import {ref} from 'vue'
// import { beforeMount} from 'vue';

export const useFilm =defineStore("Films",{
  state:()=>{
    return{
        Films:[],
        defaultFilms:[],
        loaded:false
    }
  },
  getters:{

 
  },

  actions:{
    async searchFilm(user_search:string){
       const api_key =import.meta.env.VITE_API_KEY; 
        const res =await fetch( `http://www.omdbapi.com/?apikey=${api_key}&s=${user_search}`);
        const data = await res.json()
        this.Films =data.Search
   

    },

    async SearchDfaultFilms(){
        const defaultSearch:string="hello"
        const api_key =import.meta.env.VITE_API_KEY; 
        const res=  await fetch( `http://www.omdbapi.com/?apikey=${api_key}&s=${defaultSearch}`);
        const  data = await res.json()
        this.defaultFilms= data.Search
        console.log( this.defaultFilms)
    }

  }
}
)

//     let Films:any =[{'name':"john wick",'Type':"movie"}]
//    const   getSeries= computed(()=>{
//     return "hello series"
//    })
 


//     async function  searchFilm(user_search:any){
//         const api_key =import.meta.env.VITE_API_KEY; 
//         const res =await fetch( `http://www.omdbapi.com/?apikey=${api_key}&s=${user_search}`);
//         const data = await res.json()
//         Films =data.Search
//         console.log(Films)
    
//     }



// return{searchFilm,Films,getSeries}

// });
