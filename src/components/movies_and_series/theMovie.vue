<script setup lang="ts">
defineProps({
  film:Object
})
</script>

<template>

<div v-if="film" class="movie-card">
    <div class="card-img">
      <img :src="film.Poster" alt="">
    </div>
    <div class="movie-cards-margins">
      <button class="stream-type uppercase">{{ film.Type }}</button>
      <h1 class="mt-4">{{ film.Title }}</h1>
      <h5 class="text-sm">{{ film.Title }}</h5>
      <div class="flex gap-2"> <h6 class="rating">7.9/306k</h6> <img  class="w-7" src="/imdb.png" alt=""></div>
      <div class="mt-5 flex  gap-4">
        <img class="round-image w-12 h-12  " src="/avater_1.jpg" alt="">
        <h5 class=" align-middle mb-2 mt-4">Mkay_dev</h5>
      </div>
    </div>
  </div>


  <div v-else class="movie-card">
    <div class="card-img">
      <img src="/avater_1.jpg" alt="">
    </div>
    <div class="movie-cards-margins">
      <button class="stream-type uppercase">movie</button>
      <h1 class="mt-4">AVATER</h1>
      <h5 class="text-sm">The way of the water Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h5>
      <div class="flex gap-2"> <h6 class="rating">7.9/306k</h6> <img  class="w-7" src="/imdb.png" alt=""></div>
      <div class="mt-5 flex  gap-4">
        <img class="round-image w-12 h-12  " src="/john_wick.jpg" alt="">
        <h5 class=" align-middle mb-2 mt-4">Mkay_dev</h5>
      </div>
    </div>
  
  </div>

  <div class="movie-card">
    <div class="card-img">
      <img src="/anime.jpg" alt="">
    </div>
    <div class="movie-cards-margins">
      <button class="stream-type uppercase">movie</button>
      <h1 class="mt-4">AVATER</h1>
      <h5 class="text-sm">The way of the water Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h5>
      <div class="flex gap-2"> <h6 class="rating">7.9/306k</h6> <img  class="w-7" src="/imdb.png" alt=""></div>
      <div class="mt-5 flex  gap-4">
        <img class="round-image w-12 h-12  " src="/avater.jpg" alt="">
        <h5 class=" align-middle mb-2 mt-4">Mkay_dev</h5>
      </div>
    </div>
  
  </div>

  <div class="movie-card">
    <div class="card-img">
      <img src="/avater.jpg" alt="">
    </div>
    <div class="movie-cards-margins">
      <button class="stream-type uppercase">movie</button>
      <h1 class="mt-4">AVATER</h1>
      <h5 class="text-sm">The way of the water Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h5>
      <div class="flex gap-2"> <h6 class="rating">7.9/306k</h6> <img  class="w-7" src="/imdb.png" alt=""></div>
      <div class="mt-5 flex  gap-4">
        <img class="round-image w-12 h-12  " src="/avater.jpg" alt="">
        <h5 class=" align-middle mb-2 mt-4">Mkay_dev</h5>
      </div>
    </div>
  
  </div>

  <div class="movie-card">
    <div class="card-img">
      <img src="/avater.jpg" alt="">
    </div>
    <div class="movie-cards-margins">
      <button class="stream-type uppercase">movie</button>
      <h1 class="mt-4">AVATER</h1>
      <h5 class="text-sm">The way of the water Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h5>
      <div class="flex gap-2"> <h6 class="rating">7.9/306k</h6> <img  class="w-7" src="/imdb.png" alt=""></div>
      <div class="mt-5 flex  gap-4">
        <img class="round-image w-12 h-12  " src="/avater.jpg" alt="">
        <h5 class=" align-middle mb-2 mt-4">Mkay_dev</h5>
      </div>
    </div>
  
  </div>

  <div class="movie-card">
    <div class="card-img">
      <img src="/avater.jpg" alt="">
    </div>
    <div class="movie-cards-margins">
      <button class="stream-type uppercase">movie</button>
      <h1 class="mt-4">AVATER</h1>
      <h5 class="text-sm">The way of the water Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h5>
      <div class="flex gap-2"> <h6 class="rating">7.9/306k</h6> <img  class="w-7" src="/imdb.png" alt=""></div>
      <div class="mt-5 flex  gap-4">
        <img class="round-image w-12 h-12  " src="/avater.jpg" alt="">
        <h5 class=" align-middle mb-2 mt-4">Mkay_dev</h5>
      </div>
    </div>
  </div>
</template>