<script setup lang="ts">

import theFooter from './components/default/theFooter.vue';
import theNavbar from './components/default/theNavbar.vue';

import { useFilm } from './stores/filmStore';
const films =useFilm()
films.SearchDfaultFilms()
films.defaultFilms


</script>
<template>
  <div>
    <section class="hero">
      <the-navbar />
    
      <router-view>
      
      </router-view>
      <the-footer />
    </section>
 
  </div>
</template>
<style>
</style>