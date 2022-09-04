
<template>
  <div
    class="bg-[#1da5fb] px-4 text-center h-[55px] flex items-center justify-center">
    <h3>SIGN UP FOR OUR NEWSLETTER</h3>
  </div>
  <div class="bg-black p-6 text-white">
    <div class="w-full flex justify-center">
      <span class="text-white mx-5" v-for="item in items">{{ item }}</span>
    </div>
      <p class="text-center text-[10px] leading-3 my-4">
        ABOUT EDC WEEK | CONTACT US | PRIVACY POLICY
      </p>
      <p class="text-center text-[10px] leading-3">
        BY CONTINUING PAST THIS PAGE, YOU AGREE TO OUR TERMS OF USE. | WEB ACCESSIBILITY | DO NOT SELL MY INFO | ©2021
        INSOMNIAC
        HOLDINGS, LLC. ALL RIGHTS RESERVED
      </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ['1', '2', '3', '4', '5']
    };
  }
};
</script>

<style scoped></style>
