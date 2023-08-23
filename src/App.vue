<script setup lang="ts">
import { onMounted } from 'vue';
import theFooter from './components/default/theFooter.vue';
import theNavbar from './components/default/theNavbar.vue';




onMounted(()=>{
  const api_key =import.meta.env.VITE_API_KEY;
  console.log(api_key)
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