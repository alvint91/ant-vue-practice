<script setup>
import { RouterLink, RouterView } from 'vue-router';
// import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavComponent.vue';
import HeroComponent from './components/HeroComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

</script>

<template>
  <header>
    <nav>
      <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
      <NavBar />
    </nav>
  </header>

  <RouterView />

  <footer>
    <FooterComponent />
  </footer>
</template>

<style scoped></style>
