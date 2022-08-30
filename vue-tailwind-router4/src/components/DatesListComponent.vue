<script>
export default {
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7]
    };
  }
};
</script>

<template>
  <div
    class="bg-white px-4 text-center h-[30px] flex align-center justify-center">
    <h3>2022 DATES</h3>
  </div>
  <div class="bg-[#252525] text-white flex justify-center align-center h-[61px]" v-for="item in items">
    <h1 class="h-fit">hi</h1>
  </div>
</template>

<style scoped></style>
