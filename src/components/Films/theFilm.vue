<script setup lang="ts">
import { RouterLink } from 'vue-router';
const props:any=defineProps({
  film:Object
})
</script>

<template>

<div>
  <RouterLink :to="`/film/${props.film.imdbID}`" >
<div class="movie-card">
  <div class="card-img">

   
<img :src="props.film.Poster" alt="">
</div>
<div class="movie-cards-margins">
<button class="stream-type uppercase">{{props.film.Type }}</button>
<h1 class="mt-4">{{props.film.Title }}</h1>
<!-- <h5 class="text-sm">{{props.film.Type}}</h5> -->
<div class="flex gap-2"> <h6 class="rating">{{ props.film.Year }}</h6> <img  class="w-7" src="/imdb.png" alt=""></div>
<!-- <div class="mt-5 flex  gap-4">
  <img class="round-image w-12 h-12  " src="/avater_1.jpg" alt="">
  <h5 class=" align-middle mb-2 mt-4">{{  }}</h5>
</div> -->
</div>
</div>
</RouterLink>
</div>
</template>