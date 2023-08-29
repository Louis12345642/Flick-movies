<script setup lang="ts">
import theFilm from './theFilm.vue';


const props:any=defineProps({
      Films:Array,
      loaded:Boolean
})


</script>

<template>
     <div class="movies grid grid-cols-1 md:grid md:grid-cols-3 gap-8 ">
      <!-- the card for a movie -->

      <theFilm  v-for="film in props.Films" :key="film.Title" :film="film" />


 </div>

 <div>
 </div>
</template>