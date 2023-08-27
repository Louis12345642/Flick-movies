import { defineStore } from 'pinia'


export const useFilm =defineStore("Films",{
  state:()=>{
    return{
        Films:[],
        defaultFilms:[],
        loaded:false,
        errorsMessage:[{}]
    }
  },
  getters:{

 
  },

  actions:{
    async searchFilm(user_search:string){
    try{
      const api_key =import.meta.env.VITE_API_KEY; 
      const res =await fetch( `http://www.omdbapi.com/?apikey=${api_key}&s=${user_search}`);
      const data = await res.json()

    
      console.log(this.Films)
      if(data.Search == undefined){
        this.errorsMessage.push({"message":"no movie match"})
      }
      else{
        this.Films =data.Search

      }
    
    }
    catch(error){
      this.errorsMessage.push({"message":`${error}`})
    }
   
    },
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
