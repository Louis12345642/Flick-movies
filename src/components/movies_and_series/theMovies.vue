<script setup lang="ts">
import theMovie from './theMovie.vue'


const props:any=defineProps({
      Films:Array,
      loaded:Boolean
})



// if(loading){
//       console.log("loaading")
// }
</script>

<template>
     <div class="movies grid grid-cols-1 md:grid md:grid-cols-3 gap-8 ">
      <!-- the card for a movie -->

      <theMovie  v-for="film in props.Films" :key="film.Title" :film="film" />


 </div>

 <div>
 {{ props.loaded }}
default
 </div>
</template>