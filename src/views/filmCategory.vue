
<script setup lang="ts">
import { useFilm } from '@/stores/filmStore';
import { onBeforeMount } from 'vue'
import {computed} from 'vue'
import { useRoute } from 'vue-router';


const router =useRoute()

const routeValue =router.params.type

const  film =useFilm()
// let filmCategory =film.Films

async function getFilmCategory(){
      try{
        const defaultSearch=import.meta.env.VITE_DEFAULT_SEARCH
        const api_key =import.meta.env.VITE_API_KEY; 
        const res=  await fetch( `http://www.omdbapi.com/?apikey=${api_key}&s=${defaultSearch}`);
        const  data = await res.json()
        film.Films
        film.Films=data.Search

      }
      catch(error){
        console.log(error)
      }
   
}
//calling the default films function in a lifecycle hook
onBeforeMount(()=>{
    getFilmCategory()

})

//filter the films base on there type
const films=computed(
()=>{

     const filmCategory:any = film.Films.filter((ela:any)=>ela.Type == routeValue)

     return filmCategory
  
    }
)



</script>
<template>
    <div>

{{ films}}
        category
    </div>
</template>