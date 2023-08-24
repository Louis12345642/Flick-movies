<script setup lang="ts">
import heroSection from '../components/hero_section/heroSection.vue'
import theWatchHistory from '../components/watch_history/theWatchHistory.vue'
import theMovies from '../components/movies_and_series/theMovies.vue'
import {useFilm} from '../../src/stores/filmStore'


//get the film a store to make action
const film =useFilm()

//get user's search value
let user_search=""

const getUsersearch=():void=>{
  film.searchFilm(user_search)
  // console.log(user_search)
}

</script>

<template>
  <main>
    <hero-section />

<div class="mainContainer">
  <!-- <h3 class="uppercase" v-for="movie in movieData.movies" :key="movie.country">{{ movie.name }}</h3> -->

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

    <theMovies />
  </section>
</div>
  </main>
</template>
