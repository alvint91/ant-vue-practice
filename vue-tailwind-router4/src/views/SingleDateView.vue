<template>
  <div class="bg-black justify-center items-center text-white">
    <h1
      class="bg-[#211d1d] w-full text-center font-black text-[14.4px] sm:text-[16px] lg:text-[18px] uppercase px-4 py-[15px] leading-none">
      {{
        eventOrDate
          ? `showing all events on ${fullDay}`
          : `showing all events at ${route.params.venue}`
      }}
    </h1>
  <div class="flex justify-center">
<div v-if="eventOrDate" class="p-[15px] w-[1130px]">
  <h1 class="bg-white text-black font-black text-[12px] sm:text-[14px] md:text-[18px] uppercase p-2">
    {{ fullDay }}
  </h1>
  <div v-for="item in data">
    <EventComponent v-if="item.date.includes(split)" :artist="item.artist" :venue="item.venue" :date="item.date"
      :time="item.time" :image="item.image" />
  </div>
</div>
<div v-else class="p-[15px]">
  <div v-for="item in sortedDays">
    <h1 class="bg-white text-black font-black text-[11px] uppercase p-2">
      {{ item }}
    </h1>
    <div v-for="day in venueDays">
      <EventComponent v-if="day.date.includes(item)" :artist="day.artist" :venue="day.venue" :date="day.date"
        :time="day.time" />
    </div>
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
const eventDays = inject('eventDays');
const day = route;

const eventOrDate = computed(() => {
  return route.path.split('/').includes('date');
});

const split = computed(() => {
  if (eventOrDate.value) {
    return day.params.day.split('-')[1];
  }
});

const fullDay = computed(() => {
  if (eventOrDate.value) {
    return eventDays.filter(day => day.includes(split.value))[0];
  }
});

const venue = computed(() => {
  if (eventOrDate.value === false) {
    return route.params.venue;
  }
});

const venueDays = computed(() => {
  return data.filter(event => event.venue.includes(route.params.venue));
});

const uniqueVenueDays = computed(() => {
  const unique = [...new Set(venueDays.value.map(item => item.date))];
  return unique;
});

const sortedDays = computed(() => {
  let unsorted = uniqueVenueDays.value.slice(0);
  unsorted.sort(function (a, b) {
    let aa = parseInt(a.split(' ')[2]);
    let bb = parseInt(b.split(' ')[2]);
    let answer = aa - bb;
    return answer;
  });
  return unsorted;
});
</script>

<style scoped></style>
