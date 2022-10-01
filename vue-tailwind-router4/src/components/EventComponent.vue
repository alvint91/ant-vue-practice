<template>
  <div class="bg-black uppercase h-fit p-5 font-black sm:flex sm:justify-between">
    <div class="flex">
      <RouterLink :to="`/event/${artist}`">
        <img class="hidden md:block h-[120px] w-[120px] lg:h-[145px] lg:w-[145px] object-scale-down" :src="image" alt="">
      </RouterLink>
      <div class="leading-tight">
        <h2 class="text-[#1da5fb] text-[24px] lg:text-[32px]">{{ artist }}</h2>
        <RouterLink :to="`/events/venue/${venue}`">
          <h3 class="text-white text-[15px] lg:text-[20px]">{{ venue }}</h3>
        </RouterLink>
        <RouterLink :to="`/events/date/may-${date}`">
          <h4 class="text-[#757575] text-[12px] lg:text-[15px] mb-2">
            <p>{{ date }}</p>
            <p>{{ time }}</p>
          </h4>
        </RouterLink>
      </div>
    </div>

    <div>
      <a href="https://lasvegas.electricdaisycarnival.com/" target="_blank" class="text-white text-[11px] md:text-[14px]">
        <div class="bg-[#1da5fb] px-[10px] py-[7px] w-[150px] text-center mb-2">
          buy tickets
        </div>
      </a>
      <RouterLink :to="`/event/${artist}`" class="text-white text-[11px] md:text-[14px]">
        <div class="px-[10px] py-[7px] w-[150px] text-center border-[#1da5fb] border-solid border-[1px] mb-2">
          more info
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  artist: {
    type: String,
    default: 'artist name'
  },
  venue: {
    type: String,
    default: 'venue location'
  },
  date: {
    type: String,
    default: 'event date'
  },
  time: {
    type: String,
    default: 'event time'
  },
  image: {
    type: String,
    default: null
  }
});
</script>
