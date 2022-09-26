<template>
  <div
    id="artists"
    class="bg-white px-4 text-center h-[30px] flex items-center justify-center sm:h-[40px] text-[16px] sm:text-[20px] md:text-[22px] sm:font-normal">
    <h3>2022 TALENT</h3>
  </div>
  <div class="bg-black py-5 px-2.5 sm:py-[30px] sm:px-5 md:p-[35px] flex justify-center">
    <ul
      class="text-[14px] sm:text-base md:text-lg lg:text-[21px] text-center p-0 text-white uppercase font-black dotsbetween max-w-[1150px]">
      <li v-for="item in items" class="inline-block">
        <RouterLink :to="`/event/${item.artist}`">
          {{ item.artist }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  inject: ['data'],
  data() {
    return {
      items: this.data
    };
  }
};
</script>

<style scoped>
ul.dotsbetween li:after {
  content: '\2022';
  font-size: 1.25rem;
  color: #1da5fb;
  margin: 0 10px;
}
</style>
