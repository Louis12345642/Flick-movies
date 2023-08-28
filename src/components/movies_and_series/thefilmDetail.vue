<script setup lang="ts">
import { useRoute } from 'vue-router';
import {ref }from 'vue'
import { onBeforeMount } from 'vue'
import { RouterLink } from 'vue-router';


 
//initialising the router here  to get the access to the id params
const router =useRoute()

let getFilmDetails:any=ref([])


//getting the id param
let routeId:any =router.params.id;
async function fetchFilmDetails(id:string) {
        const api_key =import.meta.env.VITE_API_KEY; 
        const res =await fetch( `http://www.omdbapi.com/?apikey=${api_key}&i=${id}`);
        const data = await res.json()
        getFilmDetails.value=data
      
    
}


onBeforeMount(()=>{

fetchFilmDetails(routeId)
})




</script>
    

<template>



<main class="mobileContainer">
    <main class="max-w-6xl mx-auto mt-10 lg:mt-20 space-y-6 container ">
    <article class="max-w-4xl mx-auto lg:grid lg:grid-cols-12 gap-x-10">
        <div class="col-span-4 lg:text-center lg:pt-14 mb-10">
            <img :src="getFilmDetails.Poster" alt="" class="rounded-xl">

            <p class="mt-4 block text-gray-400 text-xs">
                Published <time>{{ getFilmDetails.Year }}</time>
            </p>

            <div class="flex items-center lg:justify-center text-sm mt-4">
                <img class="mt-7 w-16 h-16 rounded-full round-border" :src=" getFilmDetails.Poster" alt="">
                <div class="ml-5 text-left mt-5">
                 
                    <h6>{{ getFilmDetails.Actors }}</h6>
                </div>
            </div>
        </div>

        <div class="col-span-8">
            <div class="hidden lg:flex justify-between mb-6">
                <RouterLink to="/"
                    class="transition-colors duration-300 relative inline-flex items-center text-lg hover:text-blue-500">
                    <svg width="22" height="22" viewBox="0 0 22 22" class="mr-2">
                        <g fill="none" fill-rule="evenodd">
                            <path stroke="#000" stroke-opacity=".012" stroke-width=".5" d="M21 1v20.16H.84V1z">
                            </path>
                            <path class="fill-current"
                                d="M13.854 7.224l-3.847 3.856 3.847 3.856-1.184 1.184-5.04-5.04 5.04-5.04z">
                            </path>
                        </g>
                    </svg>

                    Back to home
                </RouterLink>

                <div class="space-x-2">
                    <a href="#"
                        class="px-3 py-1 border border-blue-300 rounded-full text-blue-300 text-xs uppercase font-semibold"
                        style="font-size: 10px">{{ getFilmDetails.Type }}</a>
             
                </div>
            </div>

            <h1 class="font-bold text-3xl lg:text-4xl mb-10">
               
                {{ getFilmDetails.Title }}
            </h1>

            <div class="space-y-4 lg:text-lg leading-loose space-x-2">
                <h5>{{ getFilmDetails.Plot }}</h5>

             
            </div>
        </div>
    </article>
</main>
</main>

</template>

