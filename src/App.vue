<script setup lang="ts">
import { onMounted } from 'vue';
import theFooter from './components/default/theFooter.vue';
import theNavbar from './components/default/theNavbar.vue';
import HomeView from './views/HomeView.vue';






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