<template>
  <div class="flex justify-between items-center px-[25px] py-5 mx-auto bg-black h-[80px] fixed top-0 w-full sm:p-5 sm:h-[140px]">
    <div>
      <RouterLink to="/">
        <h3 class="text-2xl font-medium text-white text-500">LOGO</h3>
      </RouterLink>
    </div>
    <div class="hidden space-x-8 lg:flex pr-0">
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
