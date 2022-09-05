<template>
  <div
    class="bg-white px-4 text-center h-[30px] flex items-center justify-center">
    <h3>2022 TALENT</h3>
  </div>
  <!-- <div class="bg-black flex justify-center py-5 px-2.5"> -->
  <!-- <div class="bg-black py-5 px-2.5"> -->
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
  data() {
    return {
      items: [
        'above & beyond',
        'aerial grey',
        'alan walker',
        'alesso',
        'ann clue',
        'armin van buuren',
        'artbat',
        'atliens',
        'bad beat',
        'bart skils',
        'basscon pool party',
        'bassrush pool party',
        'bastian bux',
        'ben finx',
        'blunts & blondes',
        'boris brejcha',
        'brett rubin',
        'cash cash',
        'the chainsmokers',
        'charly jordan',
        'cheyenne giles',
        'chris garcia',
        'chris lake',
        'christopher james',
        'claptone',
        'cloonee',
        'code black',
        'crespo',
        'deadmau5',
        'delta heavy',
        'deorro',
        'deux twins',
        'diplo',
        'dj pauly d',
        'dj snake',
        'dom dolla',
        'dombresky',
        'dr phunk',
        'edc week afterhours',
        'elrow',
        'eric d-lux',
        'factory 93',
        'fisher',
        'flosstradamus',
        'franklyn watts',
        'g-eazy',
        'gta',
        'harry romero',
        'honeyluv',
        'illenium',
        'imanu',
        'inigo vontier',
        'jauz',
        'jessica audiffred',
        'john summit',
        'joshwa',
        'justin credible',
        'justin mylo',
        'kaskade',
        'kreation',
        'lny tnz',
        'loud luxury',
        'lucky lou',
        'mad dog',
        'marshmello',
        'martin garrix',
        'meduza',
        'moritz hofbauer (live)',
        'murda beatz',
        'nightmre',
        'nick warren',
        'nightstalker',
        'nora en pure',
        'partiboi69',
        'porter robinson',
        'rated r',
        'riley bee',
        'scooter and lavelle',
        'scotty boy',
        'sidepiece',
        'steve aoki',
        'steve walker',
        'suae',
        'tchami',
        'techno taco tuesday',
        'tiesto',
        'timmy trumpet',
        'tini gessler',
        'tinlicker',
        'tnt',
        'tris tiffany',
        'troyboi',
        'tyga',
        'vintage culture',
        'william black',
        'xenaa',
        'yellow claw'
      ]
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
