<script setup lang="ts">
import { onMounted } from 'vue';
import theFooter from './components/default/theFooter.vue';
import theNavbar from './components/default/theNavbar.vue';
import HomeView from './views/HomeView.vue';
import mitt from 'mitt';
const emitter = mitt();




emitter.on('user_search', e => console.log(e) )

const api_key =import.meta.env.VITE_API_KEY;



onMounted(()=>{


})
</script>
<template>
  <div>
    <section class="hero">
      <the-navbar />
      <router-view> </router-view>
      <the-footer />
    </section>
 
  </div>
</template>
<style>
</style>