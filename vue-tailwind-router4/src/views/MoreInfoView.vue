<template>
  <div class="bg-black">
    <h1 class="bg-white w-full text-center font-normal text-[16px] uppercase px-4 py-0">
      2022 edc week events
    </h1>
    <div class="p-10">
      <img
      :src="artistDetails.image"
      class="mb-8">
      <div class="text-[#757575] uppercase font-black">
        <h1 class="text-[#1da5fb] text-[32px] leading-[1]">{{artist}}</h1>
        <h2 class="text-[20px] text-white">{{artistDetails.venue}}</h2>
        <h3>{{artistDetails.date}}</h3>
        <h2>{{artistDetails.time}}</h2>
      </div>
    </div>
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
</script>

<style scoped></style>
