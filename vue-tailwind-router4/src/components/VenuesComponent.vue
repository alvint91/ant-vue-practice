<template>
  <div
    id="venues"
    class="bg-white px-4 text-center h-[30px] flex items-center justify-center">
    <h3>2022 VENUES</h3>
  </div>
  <div class="bg-black p-4">
    <button
      class="w-full border-[2px] border-black bg-[#252525] text-white flex justify-center items-center h-[100px]"
      v-for="venue in venues">
      <RouterLink :to="`/events/venue/${venue}`">
      <h1 class="uppercase h-fit">{{ venue }}</h1>
      </RouterLink>
  </button>
  <!-- <h1 class="uppercase h-fit">{{ item }}</h1> -->
    <!-- <RouterLink to:="`/events/venue`"
      class="w-full border-[2px] border-black bg-[#252525] text-white flex justify-center items-center h-[100px]"
      v-for="venue in venues">
      <h1 class="uppercase h-fit">{{ item }}</h1>
    </RouterLink> -->
  </div>
</template>

<script setup>
import { ref, inject } from 'vue'
import { useRoute } from 'vue-router'
const data = inject('data');
const venues = [...new Set(data.map(item => item.venue))].sort()
</script>
