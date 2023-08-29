
<script setup lang="ts">
import { useFilm } from '@/stores/filmStore';
import { onBeforeMount } from 'vue'
import {computed} from 'vue'
import { useRoute } from 'vue-router';
import theFilmsVue from '@/components/Films/theFilms.vue';



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
const films:any=computed(
()=>{

     const filmCategory:any = film.Films.filter((ela:any)=>ela.Type == routeValue)

     return filmCategory
  
    }
)




</script>
<template>
    <div>
        <div class="recomended-movies mt-20 mainContainer">
  <section v-if="films.length >0">
    <div class="md:flex md:justify-between sm:flex sm:justify-between mt-8 mb-8">
      <h1 class="uppercase sm:mb-4">{{ films[0]?.Type }}s</h1>

  </div>
    <theFilmsVue :Films="films"/>
  </section>
  <section v-else>
    <h1>No {{ routeValue }} found</h1>
  </section>
</div>

    
    </div>
</template>