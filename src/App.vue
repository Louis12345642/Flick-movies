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

      <section class="mainContainer md:grid md:grid-cols-3 md:gap-10  grid grid-cols-1 sm:mobile-container">

    <div class="hero-heading ">
          <h1 class="text-bold mobile-text-head" >SPIDER</h1>
          <h2 class="text-bold large-screen-text " >SPIDER MAN</h2>
          <h6>Action and advanture movie</h6>
          <h6>After being bitten by a genetically altered spider, outcast teenager</h6>
         <div class="flex gap-2"> <h6 class="rating">7.9/306k</h6> <img  class="w-7" src="/imdb.png" alt=""></div>
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

    
<div class="mainContainer">
  <h3 class="uppercase">whatch history</h3>
  <section class="mt-10 whatch-history grid grid-cols-1 md:grid md:grid-cols-4 sm:grid sm:grid-cols-2 gap-8">
    <div class="whatch-history-card">
            <div>
              <img class="bg-cover" src="/john_wick_1.jpg" alt="">

            </div>
      
          <h4 class="mt-2 uppercase">Spider Man</h4>
          <div>
            <h5>spiderman science fiction</h5>
          </div>
          </div>

          <div class="whatch-history-card">
            <div>
              <img src="/anime.jpg" alt="">

            </div>
      
          <h4 class="mt-2 uppercase">Spider Man</h4>
          <div>
            <h5>spiderman science fiction</h5>
          </div>
          </div>

          <div class="whatch-history-card">
            <div>
              <img src="/avater.jpg" alt="">

            </div>
      
          <h4 class="mt-2 uppercase">Spider Man</h4>
          <div>
            <h5>spiderman science fiction</h5>
          </div>
          </div>

          <div class="whatch-history-card">
            <div>
              <img src="/avater_1.jpg" alt="">

            </div>
      
          <h4 class="mt-2 uppercase">Spider Man</h4>
          <div>
            <h5>spiderman science fiction</h5>
          </div>
          </div>
     
        </section>
</div> 
<!-- working on the main cards of the website -->
<div class="recomended-movies mt-20 mainContainer ">
<section>
  <div class="md:flex md:justify-between sm:flex sm:justify-between mt-8 mb-8">
  <h1 class="uppercase sm:mb-4">continue watching</h1>

    <form class="movie-search mt-8 sm:mt-0 md:mt-0">
      <input placeholder="popular" type="text">
    </form>

  </div>

 <div class="movies grid grid-cols-1 md:grid md:grid-cols-3 gap-8 ">
  <div class="movie-card">
    <div class="card-img">
      <img src="/john_wick.jpg" alt="">
    </div>
    <div class="movie-cards-margins">
      <button class="stream-type uppercase">movie</button>
      <h1 class="mt-4">AVATER</h1>
      <h5 class="text-sm">The way of the water Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h5>
      <div class="flex gap-2"> <h6 class="rating">7.9/306k</h6> <img  class="w-7" src="/imdb.png" alt=""></div>
      <div class="mt-5 flex  gap-4">
        <img class="round-image w-12 h-12  " src="/avater_1.jpg" alt="">
        <h5 class=" align-middle mb-2 mt-4">Mkay_dev</h5>
      </div>
    </div>
  
  </div>

  <div class="movie-card">
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
 

 


 </div>


</section>
</div>

<footer class="footer-design pt-4 pb-4">

  <section>
    <div class="mainContainer mb-8 grid grid-cols-1 md:grid md:grid-cols-3 gap-x-20">

      <div>
        <div class="flex gap-1 logo mb-4 ">
        <img class="smallIcons" src="/logo.png" alt="" />
        <h1><a href="/">MFlick</a></h1>
      </div>
        <h6 class="text-sm">Action and advanture movie</h6>
          <h6 class="text-sm">After being bitten by a genetically altered spider, outcast teenager </h6>
         <div class="flex gap-4"> <h6 class="rating">7.9/306k</h6> <img  class="w-7" src="/imdb.png" alt=""></div>
         <div class="flex gap-3 hero-icons mt-5"><img src="/instagram.png" alt="">
          <img src="/bell.png" alt="">
          <img src="github.png" alt=""></div>
      
          <div class="mt-4"><h6 class="text-sm"> Movie-Flick &copy 2023</h6></div>
          <!-- <div class="red-btn mt-5">
        <button class="rounded-md shadow-md">see more Details</button>
          </div> -->
      </div>
  <div class="flex gap-10 mt-8 md:mt-0">
    <ul>
      <div class="space-y-2 mt-5">
        <h2 class="uppercase mt-4 mb-2">Products</h2>
          <li>
            <a  class="text-sm" href="#">TV shows</a>
            <div class="border-link shadow-md"></div>
          </li>
          <li>
            <a class="text-sm" href="#">Events</a>
            <div class="border-link shadow-md"></div>
          </li>
          <li>
            <a class="text-sm" href="#">Sports</a>
            <div class="border-link shadow-md"></div>
          </li>
          <li>
            <a  class="text-sm" href="#">movies</a>
            <div class="border-link shadow-md"></div>
          </li>
          <li>
            <a class="text-sm" href="#">series</a>
            <div class="border-link shadow-md"></div>
          </li>

          <br>
      
  
      </div>
      </ul>

      <ul>

      <div class="space-y-2 mt-5  ">
        <h2 class="uppercase mt-4 mb-2">Couponds</h2>
          <li>
            <a class="text-sm" href="#">TV shows</a>
            <div class="border-link shadow-md"></div>
          </li>
          <li>
            <a class="text-sm" href="#">Events</a>
            <div class="border-link shadow-md"></div>
          </li>
          <li>
            <a class="text-sm" href="#">Sports</a>
            <div class="border-link shadow-md"></div>
          </li>
          <li>
            <a class="text-sm" href="#">movies</a>
            <div class="border-link shadow-md"></div>
          </li>
          <li>
            <a class="text-sm" href="#">series</a>
            <div class="border-link shadow-md"></div>
          </li>
          <br>
      </div>
      </ul>
  </div>
  <ul>

<div class="space-y-2 mt-5">
  <h2 class="uppercase mt-4 mb-2">Important Links</h2>
    <li>
      <a class="text-sm" href="#">Mkay_dev</a>
      <div class="border-link shadow-md"></div>
    </li>
    <li>
      <a class="text-sm" href="#">Home</a>
      <div class="border-link shadow-md"></div>
    </li>
    <li>
      <a class="text-sm" href="#">About</a>
      <div class="border-link shadow-md"></div>
    </li>
    <li>
      <a class="text-sm" href="#">Contact</a>
      <div class="border-link shadow-md"></div>
    </li>
    <li>
      <a class="text-sm" href="#">Api</a>
      <div class="border-link shadow-md"></div>
    </li>
    <br>
</div>
</ul>
    </div>
  </section>
</footer>
 </section>


  </div>
</template>
<style>
</style>