<script setup lang="ts">
import heroSection from '../components/hero_section/heroSection.vue'
import theWatchHistory from '../components/watch_history/theWatchHistory.vue'
import theMovies from '../components/movies_and_series/theMovies.vue'
import {useFilm} from '../../src/stores/filmStore'
import { ref } from 'vue'
import { onBeforeMount } from 'vue'




//calling the default movie function

//get the film a store to make action
const film =useFilm()


//get user's search value
let user_search=ref('')

//get the state of the api

const loaded:boolean=film.loaded

//calling the default movies here
 async function getDefaultFilm(){
  const defaultSearch:string="hello"
        const api_key =import.meta.env.VITE_API_KEY; 
        const res=  await fetch( `http://www.omdbapi.com/?apikey=${api_key}&s=${defaultSearch}`);
        const  data = await res.json()
        film.Films= data.Search
   
}
onBeforeMount(()=>{
  getDefaultFilm()
})

//get default film
film.SearchDfaultFilms()

const defaultFilms =film.defaultFilms


const getUsersearch=():void=>{
  //validate user's search 
  if(user_search.value.length>2){
    film.searchFilm(user_search.value)
  }
  else{
    console.log("please enter a search value")
  }


}

</script>

<template>
  <main>
    <hero-section />

<div class="mainContainer">
  <h3 class="uppercase">whatch history</h3>

    <the-watch-history />

</div>
<!-- working on the main cards of the website -->
<div class="recomended-movies mt-20 mainContainer">
  <section>
    <div class="md:flex md:justify-between sm:flex sm:justify-between mt-8 mb-8">
      <h1 class="uppercase sm:mb-4">continue watching</h1>

      <form @submit.prevent="getUsersearch" class="movie-search mt-8 sm:mt-0 md:mt-0">
        <input v-model="user_search" placeholder="popular" type="text" />
      </form>
    </div>
    {{defaultFilms}}
    <theMovies :Films="film.Films" :loaded="loaded" />
  </section>
</div>
  </main>
</template>
