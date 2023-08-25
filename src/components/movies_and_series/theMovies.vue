<script setup lang="ts">
import theMovie from './theMovie.vue'


defineProps({
      Films:Array
})




// if(loading){
//       console.log("loaading")
// }
</script>

<template>
     <div class="movies grid grid-cols-1 md:grid md:grid-cols-3 gap-8 ">
      <!-- the card for a movie -->

      <theMovie v-for="film in Films" :key="film.Title" :film="film"/>


 </div>
</template>