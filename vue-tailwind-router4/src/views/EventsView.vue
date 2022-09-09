<template>
  <div class="p-[15px] bg-black">
    <EventComponent v-for="item in test"/>
  </div>
</template>

<script>
import EventComponent from '../components/EventComponent.vue';

export default {
  data() {
    return {
      test: [
        1,2,3,4,5
      ]
    }
  },
  components: {
    EventComponent
  }
};
// export default {
//   data() {
//     return {
//       events: [
//         {
//           date: 'wednesday, may 18',
//           artists: [
//             {
//               name: 'dom dolla b2b john summit',
//               location: 'marquee dayclub',
//               date: 'wednesday, may 18',
//               time: '11:00 am'
//             }
//           ]
//         }
//       ]
//     };
//   }
// };
</script>

<style scoped></style>
