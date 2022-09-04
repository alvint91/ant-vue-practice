<template>
  <div class="flex justify-between items-center px-4 py-8 mx-auto bg-black">
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
      <DropDownComponent/>
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import DropDownComponent from './DropDownComponent.vue';
export default {
  components: {
    DropDownComponent
  }
};
</script>

<style scoped></style>
