<script>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <!-- <div class="bg-black h-[80px] text-white flex items-center justify-between sticky top-0">
    <span>
      <h1>edc</h1>
    </span>
    <span>
      <p>hamburger</p>
    </span>
  </div> -->
  <!-- <RouterLink to="/">Home</RouterLink> -->
  <!-- <RouterLink to="/about">About</RouterLink> -->
  <div class="flex justify-between px-4 py-8 mx-auto bg-black">
    <div>
      <RouterLink to="/">
        <h3 class="text-2xl font-medium text-white text-500">LOGO</h3>
      </RouterLink>
    </div>
    <div class="hidden space-x-8 lg:flex">
      <a href="#">Menu 1</a>
      <a href="#">Menu 2</a>
      <a href="#">Menu 3</a>
      <a href="#">Menu 4</a>
    </div>
    <div class="flex lg:hidden">
      <div class="space-y-2">
        <span class="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
        <span class="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
        <span class="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
