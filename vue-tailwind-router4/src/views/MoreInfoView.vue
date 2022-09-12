<template>
  <div class="bg-black">
    <h1 class="bg-white w-full text-center font-normal text-[16px] uppercase px-4 py-0">
      2022 edc week events
    </h1>
    <div class="p-4">
      <img :src="artistDetails.image" alt="">
      <div class="text-white
      ">
        <h1>{{artist}}</h1>
        <h3>{{artistDetails.date}}</h3>
        <h2>{{artistDetails.time}}</h2>
        <h2>{{artistDetails.venue}}</h2>
      </div>
    </div>
    <!-- <h1>
      {{artist}}
      {{artistDetails.date}}
      {{artistDetails.time}}
      {{artistDetails.venue}}
    </h1> -->
  </div>
</template>

<script setup>
import { ref, inject, computed } from 'vue';
import { useRoute } from 'vue-router'
import EventComponent from '../components/EventComponent.vue';
const route = useRoute()
const data = inject('data');
const artist = route.params.artist
const artistDetails = data.filter(element => element.artist === artist)[0]
console.log(artistDetails)
// console.log(data.filter(element => element.artist === artist)[0])
</script>

<style scoped></style>
