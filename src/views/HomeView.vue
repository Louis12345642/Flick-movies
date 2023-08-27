<script setup lang="ts">
import heroSection from '../components/hero_section/heroSection.vue'
import theWatchHistory from '../components/watch_history/theWatchHistory.vue'
import theMovies from '../components/movies_and_series/theMovies.vue'
import {useFilm} from '../../src/stores/filmStore'
import { ref } from 'vue'
import { onBeforeMount } from 'vue'


//get the film a store to make action
const film:any =useFilm()


//get user's search value
let user_search=ref('');
// an array to store all the errors
let errorsArray:any=ref([]);



//calling the default movies here
 async function getDefaultFilm(){
         const defaultSearch=import.meta.env.VITE_DEFAULT_SEARCH
        const api_key =import.meta.env.VITE_API_KEY; 
        const res=  await fetch( `http://www.omdbapi.com/?apikey=${api_key}&s=${defaultSearch}`);
        const  data = await res.json()
        film.Films= data.Search
   
}
//calling the default films function in a lifecycle hook
onBeforeMount(()=>{
  getDefaultFilm()
})

//a function to allow the user search for a film
const getUsersearch=():void=>{
  //validate user's search 
  if(user_search.value !=""){
    film.searchFilm(user_search.value)
  }
  else{

    errorsArray.value.push({"message":"please enter a search value"})
   
  }
  if(film.Films.values.length <1){
   errorsArray.value.push({"message":"Search not match"})
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

  <div  v-if="errorsArray"  class="error-wrapper">
    <div class="blue" :class="{errormessage:errorsArray}">
      <h1 v-for="error in errorsArray" :key="error">{{ error.message}}</h1>
</div>

  </div>
    <theMovies :Films="film.Films"  />
  </section>
</div>
  </main>
</template>

<style>
.error-wrapper{
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.errormessage {

  padding: 15px;
  margin-bottom: 20px;
  border-radius: 5px;
  background-color:#880F0F;
}
</style>