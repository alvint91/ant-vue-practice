<template>
  <!-- <div class="bg-black items-center p-4">
    <div v-for="day in eventDays">
      <h3 class="p-[7px] uppercase text-[12px] font-black bg-white h-fit">
        {{ day }}
      </h3>
      <div v-for="element in data">

    </div>
  </div> -->
  <div class="h-[100vh] bg-white">
    <h1>
      {{artist}}
      {{artistDetails.date}}
      {{artistDetails.time}}
      {{artistDetails.venue}}
    </h1>
    <img :src="artistDetails.image" alt="">
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
