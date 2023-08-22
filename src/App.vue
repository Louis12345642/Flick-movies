<script setup lang="ts">
import HomeView from './views/HomeView.vue'
import theFooter from './components/theFooter.vue';
import theNavbar from './components/theNavbar.vue';
</script>
<template>
  <div>
    <section class="hero">
      <the-navbar />

      <!-- <HomeView/> -->
      <router-view> </router-view>
      <the-footer />
    </section>
 
  </div>
</template>
<style>
</style>