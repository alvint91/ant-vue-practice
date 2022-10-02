<template>
  <div
    class="
    bg-black uppercase h-fit p-5 font-black
      sm:flex sm:justify-between"
  >
    <div class="flex">
      <RouterLink :to="`/event/${artist}`">
        <img
          :src="image"
          class="
            hidden h-[120px] w-[120px] object-scale-down
            md:block
            lg:h-[145px] lg:w-[145px]"
        >
      </RouterLink>
      <div class="leading-tight">
        <RouterLink :to="`/event/${artist}`">
          <h2 class="text-[#1da5fb] text-[24px] w-fit lg:text-[32px] hover:text-[white] transition ease-in-out delay-75">{{ artist }}</h2>
        </RouterLink>
        <RouterLink
        :to="`/events/venue/${venue}`"
        class="
        text-white text-[15px]
        hover:text-[#1da5fb] transition ease-in-out delay-75
        lg:text-[20px]"
        >
          {{ venue }}
        </RouterLink>
        <RouterLink
        :to="`/events/date/may-${date}`"
        class="text-[#757575] text-[12px] lg:text-[15px]"
        >
          <p>{{ date }}</p>
          <p>{{ time }}</p>
        </RouterLink>
      </div>
    </div>

    <div>
      <a href="https://lasvegas.electricdaisycarnival.com/" target="_blank" class="text-white text-[11px] md:text-[14px]">
        <div class="bg-[#1da5fb] px-[10px] py-[7px] w-[150px] text-center mb-2 hover:bg-[#fdb630] transition ease-in-out delay-75">
          buy tickets
        </div>
      </a>
      <RouterLink :to="`/event/${artist}`" class="text-white text-[11px] md:text-[14px]">
        <div class="px-[10px] py-[7px] mb-2 w-[150px] text-center border-[#1da5fb] border-solid border-[1px] hover:bg-[#1da5fb] transition ease-in-out delay-75">
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
