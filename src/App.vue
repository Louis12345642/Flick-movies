<script setup lang="ts">
import { ref, onMounted } from 'vue'

//this is how you can access the dom elements in vue script setup
const hand = ref()
//grapping the mobile style ul tag to apply the transform style
const menu=ref()

//create a function that is called when the handbugger is click
const toggleCross: Function = (): void => {
  //checking if the class open exist in handbugger div
  if (hand.value.classList.contains('open')) {
    //remove the open class if it is there
    hand.value.classList.remove('open')
  } else {
    hand.value.classList.add('open')
  
  }
  if(menu.value.classList.contains('translate-x-0')){
 
    menu.value.classList.remove('translate-x-0')
  }
  else{
    menu.value.classList.add('translate-x-0')
  }
}
onMounted(() => {
  //refrencing the toggle hand here
  hand.value.addEventListener('click', toggleCross)
})
</script>
<template>
  <div>
 <section class="hero">
  <nav
      class="sm:flex sm:justify-between md:flex md:justify-between mainContainer md:mainContainer navbar"
    >
      <div class="flex gap-1 logo">
        <img class="smallIcons" src="/logo.png" alt="" />
        <h1><a href="/">MFlick</a></h1>
      </div>
      <div>
        <ul class="sm:flex navGap md:flex nav-items">
          <li>
            <a href="#">TV shows</a>
            <div class="border-link shadow-md"></div>
          </li>
          <li>
            <a href="#">Events</a>
            <div class="border-link shadow-md"></div>
          </li>
          <li>
            <a href="#">Sports</a>
            <div class="border-link shadow-md"></div>
          </li>
          <li>
            <a href="#">Movies</a>
            <div class="border-link shadow-md"></div>
          </li>
          <li>
            <a href="#">Series</a>
            <div class="border-link shadow-md"></div>
          </li>
        </ul>
      </div>
      <div class="flex gap-1 rounded-md signup">
        <img class="smallIcons" src="/bell.png" alt="" />
        <p><a href="#">Signup</a></p>
      </div>
      <div class="handbuger" ref="hand">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>

    
    </nav>
    <ul class="mobile-menu " ref="menu">
      <div class="space-y-5 mt-5">
          <li>
            <a href="#">TV shows</a>
            <div class="border-link shadow-md"></div>
          </li>
          <li>
            <a href="#">Events</a>
            <div class="border-link shadow-md"></div>
          </li>
          <li>
            <a href="#">Sports</a>
            <div class="border-link shadow-md"></div>
          </li>
          <li>
            <a href="#">movies</a>
            <div class="border-link shadow-md"></div>
          </li>
          <li>
            <a href="#">series</a>
            <div class="border-link shadow-md"></div>
          </li>

          <br>
      
  
      </div>
      </ul>

      <section class="mainContainer grid grid-cols-3 gap-0">

    <div class="hero-heading ">
          <h1 class="text-bold" >SPIDER</h1>
          <P>Action and advanture movie</P>
          <p>After being bitten by a genetically altered spider, outcast teenager</p>
         <div class="flex gap-2"> <p class="rating">7.9/306k</p> <img  class="w-7" src="/imdb.png" alt=""></div>
         <div class="flex gap-3 hero-icons mt-5"><img src="/instagram.png" alt="">
          <img src="/bell.png" alt="">
          <img src="github.png" alt=""></div>
          <div class="red-btn mt-5">
        <button class="rounded-md shadow-md">see more Details</button>
          </div>
        </div>
      
 
   <div class="spider-image  place-self-center">
     <img src="/spider-man-png-from-pngfre-46-1.png" alt="">
        </div>
        <div class="man-text flex items-end ">
      <h1 class="">MAN</h1>
        </div>
     
      </section> 
      
 </section>
 
  </div>
</template>
<style>
</style>