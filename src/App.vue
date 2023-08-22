<script setup lang="ts">

import heroSection from './components/heroSection.vue';
import theNavbar from './components/theNavbar.vue';
import theWatchHistory from './components/theWatchHistory.vue';
import theMovies from './components/theMovies.vue'
import  theFooter from './components/theFooter.vue'

</script>
<template>
  <div>
 <section class="hero">

<the-navbar/>

<hero-section/>
    

    
<div class="mainContainer">
  <h3 class="uppercase">whatch history</h3>
  <section class="mt-10 whatch-history grid grid-cols-1 md:grid md:grid-cols-4 sm:grid sm:grid-cols-2 gap-8">

     <the-watch-history/>
        </section>
</div> 
<!-- working on the main cards of the website -->
<div class="recomended-movies mt-20 mainContainer ">
<section>
  <div class="md:flex md:justify-between sm:flex sm:justify-between mt-8 mb-8">
  <h1 class="uppercase sm:mb-4">continue watching</h1>

    <form class="movie-search mt-8 sm:mt-0 md:mt-0">
      <input placeholder="popular" type="text">
    </form>

  </div>

<theMovies/>


</section>
</div>
<the-footer/>
 </section>
<router-view>

</router-view>

  </div>
</template>
<style>
</style>