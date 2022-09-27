<template>
  <div class="bg-black">
    <h1
      class="bg-white w-full text-center font-normal text-[16px] uppercase px-4 py-0">
      2022 edc week events
    </h1>
    <div class="p-10 md:grid grid-cols-2">
      <div>
        <img :src="artistDetails.image" class="mb-8" />
      </div>
      <div class="md:pl-[30px]">
        <div class="text-[#757575] uppercase font-black border-[#757575] border-b-[1px] pb-6 mb-6">
          <h1 class="text-[#1da5fb] text-[32px] leading-[1]">{{ artist }}</h1>
          <RouterLink :to="`/events/venue/${artistDetails.venue}`">
            <h2 class="text-[20px] text-white">{{ artistDetails.venue }}</h2>
          </RouterLink>
          <RouterLink :to="`/events/date/may-${artistDetails.date}`">
            <h3 class="leading-[1]">{{ artistDetails.date }}</h3>
          </RouterLink>
          <h3 class="leading-[1]">{{ artistDetails.time }}</h3>
        </div>
        <div class="text-[#A7A7A7] border-[#A7A7A7] border-b-[1px] pb-6 mb-6">
          <p class="mb-6">
            <b> LINEUP </b>
            <br />
            Artist lineup goes here
          </p>
          <p>
            21+
            <br />
            5555 Vegas Strip Dr, Las Vegas, NV 89118
            <br />
            Tel: 555-555-5555
          </p>
        </div>
        <div class="text-white text-center font-black uppercase text-[14px]">
          <RouterLink to="/">
            <div class="w-full bg-[#1da5fb] px-[10px] py-[7px] mb-6">
              buy tickets
            </div>
          </RouterLink>
          <RouterLink to="/">
            <div class="w-full px-[10px] py-[7px] border-[#1da5fb] border-solid border-[1px] mb-2">
              facebook page
            </div>
          </RouterLink>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, inject, computed } from 'vue';
import { useRoute } from 'vue-router';
import EventComponent from '../components/EventComponent.vue';
const route = useRoute();
const data = inject('data');
const artist = route.params.artist;
const artistDetails = data.filter(element => element.artist === artist)[0];
</script>

<style scoped>
p {
  font-size: 14px;
}
</style>
