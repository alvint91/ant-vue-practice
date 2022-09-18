<template>
<div v-if="eventOrDate" class="bg-black justify-center items-center text-white">
  <h1
  class="bg-[#211d1d] w-full text-center font-black text-[13px] uppercase px-4 py-3">
     showing all events on {{fullDay}}
  </h1>
  <div class="p-[15px]">
    <h1 class="bg-white text-black font-black text-[11px] uppercase p-2">
      {{fullDay}}
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
</div>
<div v-else="eventOrDate" class="bg-black justify-center items-center text-white">
  <h1 class="bg-[#211d1d] w-full text-center font-bold text-[14px] uppercase p-4">
    showing all events at {{route.params.venue}}
  </h1>
  <div class="p-[15px]"></div>
  <!-- <div v-for="item in data">
    <EventComponent v-if="item.venue.includes(venue)" :artist="item.artist" :venue="item.venue" :date="item.date"
      :time="item.time" />
  </div> -->
</div>
</template>

<script setup>
import { ref, inject, computed } from 'vue'
import { useRoute } from 'vue-router'
import EventComponent from '../components/EventComponent.vue'
const route = useRoute()
const data = inject('data')
const eventDays = inject('eventDays');
const day = route

const eventOrDate = computed(() => {
  return route.path.split('/').includes('date')
})
// console.log(eventOrDate.value)

const split = computed(() => {
  if (eventOrDate.value) {
    return day.params.day.split('-')[1]
  }
})

const fullDay = computed(() => {
  if (eventOrDate.value) {
    return eventDays.filter(day => day.includes(split.value))[0]
  }
})

const venue = computed(() => {
  if (eventOrDate.value === false) {
    return route.params.venue
  }
})
// const venue = computed(() => {
//   if (eventOrDate.value === false) {
//     return route.params.venue
//   }
// })

if (eventOrDate.value === false) {
  // console.log(route.params.venue)
  console.log(venue.value)
}
// console.log(route.params.venue)
// console.log(typeof route.params.venue)

// console.log(venue.value)
// const split = day.params.day.split('-')[1]
// const fullDay = eventDays.filter(day => day.includes(split))[0]
// console.log(route.params.day)

// console.log(route.params.venue.split(' '))
// const venues = [...new Set(data.map(item => item.venue))].sort()
// const venue = computed(() => {
//   if (!eventOrDate.value) {
//     return venues.filter(venue => venue.includes())
//   }
// })
// console.log(venues)
// const venues = [...new Set(data.map(item => item.venue))].sort()
// if (eventOrDate.value) {
//   let split = day.params.day.split('-')[1]
//   let fullDay = eventDays.filter(day => day.includes(split))[0]
// })
</script>

<style scoped></style>
