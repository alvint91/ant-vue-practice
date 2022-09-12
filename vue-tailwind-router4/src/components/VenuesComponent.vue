<template>
  <div
    id="venues"
    class="bg-white px-4 text-center h-[30px] flex items-center justify-center">
    <h3>2022 VENUES</h3>
  </div>
  <div class="bg-black p-4">
    <button
      class="w-full border-[2px] border-black bg-[#252525] text-white flex justify-center items-center h-[100px]"
      v-for="item in items">
      <h1 class="uppercase h-fit">{{ item }}</h1>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        'club',
        'club',
        'club',
        'club',
        'club',
        'club',
        'club',
        'club',
        'club',
        'club',
        'club',
        'club',
        'club',
        'club',
        'club',
        'club',
        'club',
        'club',
        'club'
      ]
    };
  },
};
</script>
