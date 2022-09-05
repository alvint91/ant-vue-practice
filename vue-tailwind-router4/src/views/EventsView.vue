<template>
  <!-- <div class="bg-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
    <div v-for="event in events">
    </div>
  </div> -->
  <EventComponent />
</template>

<script>
import EventComponent from '../components/EventComponent.vue';

export default {
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
