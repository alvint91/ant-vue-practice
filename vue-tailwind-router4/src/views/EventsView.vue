<template>
  <div class="bg-black items-center p-4">
    <div v-for="day in eventDays">
      <h3 class="p-[7px] uppercase text-[12px] font-black bg-white h-fit">
        {{ day }}
      </h3>
      <div v-for="item in data">
        <EventComponent
          v-if="item.date === day"
          :artist="item.artist"
          :venue="item.venue"
          :date="day"
          :time="item.time" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, inject, computed } from 'vue';
import EventComponent from '../components/EventComponent.vue';
const data = inject('data');
const eventDays = inject('eventDays');

const unsortedDays = computed(() => {
  const days = eventDays.map((element)=> {
    return element.split(' ')[2]
  })
  return days
})

const sortedDays = computed(() => {
  let unsorted = unsortedDays.value
  unsorted.sort(function(a,b) {
    return a - b
  })
  return unsorted
})

// console.log(unsortedDays.value)
console.log(sortedDays.value)
</script>

<style scoped></style>
