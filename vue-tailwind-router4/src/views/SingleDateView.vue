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
<div v-else class="bg-black justify-center items-center text-white">
  <h1 class="bg-[#211d1d] w-full text-center font-bold text-[14px] uppercase p-4">
    showing all events at {{route.params.venue}}
  </h1>
  <div class="p-[15px]">

    <div v-for="item in sortedDays">
      <h3 class=" text-black p-[7px] uppercase text-[12px] font-black bg-white h-fit">
        {{ item }}
      </h3>
      <div v-for="item in venueDays">hi</div>
      <!-- <EventComponent
        v-if="item.date.includes(item)"
        :artist="item.artist"
        :venue="item.venue"
        :date="item.date"
        :time="item.time"
      /> -->
    </div>

  <!-- <div v-for="day in eventDays"> -->


    <!-- <h3 class="p-[7px] uppercase text-[12px] font-black bg-white h-fit">
      {{ day }}
    </h3>
    <div v-for="item in data">
      <EventComponent v-if="item.date === day" :artist="item.artist" :venue="item.venue" :date="day" :time="item.time" />
    </div>
  </div> -->


  <!-- </div> -->
  <!-- <div v-for="item in data">
    <EventComponent v-if="item.venue.includes(venue)" :artist="item.artist" :venue="item.venue" :date="item.date"
      :time="item.time" />
  </div> -->
  </div>
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

const venueDays = computed(() => {
  return data.filter(event => event.venue.includes(route.params.venue))
})
// console.log(venueDays.value)

const uniqueVenueDays = computed(() => {
  const unique = [...new Set(venueDays.value.map(item => item.date))]
  return unique
})
// console.log(`uniqueVenueDays:`,uniqueVenueDays.value)
// console.log(`uniqueVenueDays splitter:`,uniqueVenueDays.value[0].split(' ')[2])

const sortedDays = computed(() => {
  let unsorted = uniqueVenueDays.value.slice(0)
  unsorted.sort(function(a,b) {
    console.log(`a:`,parseInt(a.split(' ')[2]))
    console.log(`b:`,parseInt(b.split(' ')[2]))
    let aa = parseInt(a.split(' ')[2])
    let bb = parseInt(b.split(' ')[2])
    let answer = aa - bb
    return answer
  })
return unsorted
})
console.log(sortedDays.value)

</script>

<style scoped></style>
