<template>
<div class="bg-black h-[100vh] flex justify-center items-center text-white">
  <h1>
    <!-- {{$route.params.day}} -->
    <!-- {{day.params.day}} -->
    {{split}}
  </h1>
  <!-- <div v-for="item in data">
    <EventComponent v-if=""/>
  </div> -->
</div>
</template>

<script setup>
import { ref, inject, computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

import EventComponent from '../components/EventComponent.vue'
const data = inject('data')
const day = route
const split = day.params.day.split('-')[1]
</script>

<style scoped></style>
