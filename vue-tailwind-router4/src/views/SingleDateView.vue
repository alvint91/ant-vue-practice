<template>
<div class="bg-black justify-center items-center text-white">
  <h1
  class="bg-[#211d1d] w-full text-center font-bold text-[14px] uppercase p-4">
     showing all events on {{fullDay}}
  </h1>
  <div v-for="item in data">
    <EventComponent
    v-if="item.date.includes(split)"
    :artist="item.artist"
    :venue="item.venue"
    :date="item.date"
    :time="item.time"
    />
  </div>
</div>
</template>

<script setup>
import { ref, inject } from 'vue'
import { useRoute } from 'vue-router'
import EventComponent from '../components/EventComponent.vue'
const route = useRoute()
const data = inject('data')
const eventDays = inject('eventDays');
const day = route
const split = day.params.day.split('-')[1]
const fullDay = eventDays.filter(day => day.includes(split))[0]
</script>

<style scoped></style>
