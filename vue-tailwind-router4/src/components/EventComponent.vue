<template>
  <div class="bg-black uppercase h-fit p-5 font-bold">
    <h2 class="text-[#1da5fb] text-[24px]">{{ artist }}</h2>
    <h3 class="text-white text-[15px]">{{ venue }}</h3>
    <h4 class="text-[#757575] text-[12px] mb-2">
      <p>{{ date }}</p>
      <p>{{ time }}</p>
    </h4>
    <RouterLink to="/" class="text-white text-[11px]">
      <div class="bg-[#1da5fb] px-[10px] py-[7px] w-[150px] text-center mb-2">
        buy tickets
      </div>
    </RouterLink>
    <RouterLink :to="`event/${artist}`" class="text-white text-[11px]">
        <div
          class="px-[10px] py-[7px] w-[150px] text-center border-[#1da5fb] border-solid border-[1px] mb-2">
          more info
        </div>
    </RouterLink>
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
  }
});
</script>
