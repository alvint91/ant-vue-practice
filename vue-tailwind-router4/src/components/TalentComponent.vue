<template>
  <div
    class="bg-white px-4 text-center h-[30px] flex items-center justify-center">
    <h3>2022 TALENT</h3>
  </div>
  <!-- <div class="bg-black flex justify-center py-5 px-2.5"> -->
  <div class="bg-black py-5 px-2.5">
    <div class="flex flex-wrap text-center">
      <a class="text-white uppercase text-sm py-1" v-for="item in items">
        {{ item }}
      </a>
      <!-- <span class="text-white uppercase text-sm py-1" v-for="item in items">
        {{ item }}
      </span> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        'above & beyond',
        'areial grey',
        'alan walker',
        'alesso',
        'ann clue',
        'armin van buuren',
        'artbat',
        'atliens',
        'bad beat',
      ]
    };
  }
};
</script>

<style scoped></style>
