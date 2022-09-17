<template>
  <div id="artists" class="bg-white px-4 text-center h-[30px] flex items-center justify-center">
    <h3>2022 TALENT</h3>
  </div>
  <div class="bg-black py-5 px-2.5">
    <ul class="text-center p-0 text-white uppercase font-bold dotsbetween">
      <li v-for="item in items" class="inline-block">
        <RouterLink :to="`/event/${item.artist}`">
          {{item.artist}}
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
  content: "\2022";
  font-size: 1.25rem;
  color: #1da5fb;
  margin: 0 10px;
}
</style>
