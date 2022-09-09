<template>
  <div
    class="bg-white px-4 text-center h-[30px] flex items-center justify-center">
    <h3>2022 TALENT</h3>
  </div>
  <div class="bg-black py-5 px-2.5">
    <ul class="text-center p-0 text-white uppercase font-bold">
      <li v-for="item in items" class="">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  inject: ['artists'],
  data() {
    return {
      items: this.artists
    };
  }
};
</script>

<style scoped>
ul li {
  list-style: none;
  display: inline;
  font-size: 0.875rem;
}

ul li:not(:last-child):after {
  content: "\2022";
  font-size: 1rem;
  color: #1da5fb;
  padding: 0%;
  margin: 3px 10px;
}
</style>
