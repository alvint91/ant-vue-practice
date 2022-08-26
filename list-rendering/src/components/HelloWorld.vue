<script>
  let id = 1
export default {
  data: () => ({
    message: 'hi',
    list: {
      1: {
        id: id++,
        name: 'Phantom Assassin',
        image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/phantom_assassin.png',
        spells : [
          'Stifling Dagger',
          'Phantom Strike',
          'Blur',
          'Coup De Grace'
        ]
       },
      2: {
        id: id++,
        name: 'Anti Mage',
        image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png',
        spells: [
          'Mana Break',
          'Blink',
          'Counterspell',
          'Mana Void'
        ]
       },
       3: {
        id: id++,
        name: 'Sniper',
        image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/sniper.png',
        spells: [
          'Shrapnel',
          'Take Aim',
          'Headshot',
          'Assasinate'
        ]
       },
       4: {
        id: id++,
        name: 'Templar Assasin',
        image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/templar_assassin.png',
        spells: [
          'Refraction',
          'Meld',
          'Psi Blades',
          'Trap'
        ]
       }
    }
  })
}
</script>

<template>
  <div class="container">
    <div class="card" v-for="(element, key) in list">
        <h1>{{element.name}}</h1>
        <img :src="element.image" alt="">
        <p v-for="spell in element.spells">{{spell}}</p>
        <!-- <p>{{element.id}}</p> -->
        <!-- <p>{{key}}</p> -->
    </div>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
}

.card {
  height: fit-content;
  width: 20%;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, .15);
  backdrop-filter: blur(5px);
  margin: 3rem 1rem;
  font-family: sans-serif;
  color: white;
  text-align: center;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-image: url('https://dmarket.com/blog/best-dota2-wallpapers/dota2logo_hu63a418b03843b39b133100730abc88ee_104613_1920x1080_resize_q75_lanczos.jpg');
  height: 100vh
}
</style>
