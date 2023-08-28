<script setup lang="ts">
import { useRoute } from 'vue-router';
import {ref }from 'vue'
import { onBeforeMount } from 'vue'


 
//initialising the router here  to get the access to the id params
const router =useRoute()

let getFilmDetails=ref([])


//getting the id param
let routeId =router.params.id;
async function fetchFilmDetails() {
        const api_key =import.meta.env.VITE_API_KEY; 
        const res =await fetch( `http://www.omdbapi.com/?apikey=${api_key}&i=tt0413300`);
        // const res =await fetch( `http://www.omdbapi.com/?apikey=${api_key}&s=john`);
        const data = await res.json()
        getFilmDetails.value=data
        console.log(getFilmDetails)
    
}


    // async function getFilmDetail(id:string){
    //    try{
       
    //     const api_key =import.meta.env.VITE_API_KEY; 
    //     const res =await fetch( `http://www.omdbapi.com/?apikey=${api_key}&i=${id}`);
    //     // const res =await fetch( `http://www.omdbapi.com/?apikey=${api_key}&s=john`);
    //     const data = await res.json()
    //     getFilmDetails.value=data.Search
    //     console.log(getFilmDetails)
      
  

    //    }
    //    catch(error){
    // console.log(error)
    //    }
    // }

    //calling the function on before mounted
onBeforeMount(()=>{
let routerId:any=router.params.id;

fetchFilmDetails()
})




</script>
    

<template>

<div>

       <h1>hello {{ getFilmDetails}}</h1>
    </div>

</template>

