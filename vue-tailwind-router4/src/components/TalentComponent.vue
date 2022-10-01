<template>
  <div
    id="artists"
    class="bg-white px-4 text-center h-[30px] flex items-center justify-center sm:h-[40px] text-[16px] sm:text-[20px] md:text-[22px] lg:font-[400] lg:tracking-[-0.07em]">
    <h3>2022 TALENT</h3>
  </div>
  <div class="bg-black py-5 px-2.5 sm:py-[30px] sm:px-5 md:p-[35px] flex justify-center">
    <ul
      class="text-[14.4px] tracking-tight sm:text-[16.8px] md:text-[19.2px] lg:text-[21.6px] xl:text-2xl text-center p-0 text-white uppercase font-[800] dotsbetween max-w-[1150px]">
      <li v-for="item in items" class="inline-block hover:text-[#1da5fb] transition ease-in-out delay-75">
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
