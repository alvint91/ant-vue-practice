<template>
<div class="bg-black items-center p-4">
  <div v-for="day in eventDays">
    <h3
    class="p-[7px] uppercase text-[12px] font-black bg-white h-fit"
    >
      {{day}}
    </h3>
    <div v-for="element in data">
      <EventComponent
        v-if="element.date === day"
        :artist="element.artist"
        :venue="element.venue"
        :date="day"
        :time="element.time"
      />
    </div>
  </div>
</div>
</template>

<script setup>
  import { ref, inject, computed } from 'vue'
  import EventComponent from '../components/EventComponent.vue';
  const data = inject('data')
  const eventDays = inject('eventDays')

</script>


<style scoped></style>
