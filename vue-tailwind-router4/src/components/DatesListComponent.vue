<script>
export default {
  data() {
    return {
      items: [
        'wednesday, may 18',
        'thursday, may 19',
        'friday, may 20',
        'saturday, may 21',
        'sunday, may 22',
        'monday, may 23',
        'tuesday, may 23',
      ]
    };
  }
};
</script>

<template>
  <div
    class="bg-white px-4 text-center h-[30px] flex items-center justify-center">
    <h3>2022 DATES</h3>
  </div>
  <div class="bg-black">
    <button class="w-full border-[1px] border-black bg-[#252525] text-white flex justify-center items-center h-[61px]" v-for="item in items">
      <h1 class="uppercase h-fit">{{item}}</h1>
    </button>
  </div>
</template>

<style scoped></style>
