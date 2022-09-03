<script setup>
import { RouterLink, RouterView } from 'vue-router';
import NavBar from './components/NavComponent.vue';
import VenuesComponent from './components/VenuesComponent.vue';
import DatesListComponent from './components/DatesListComponent.vue';
import TalentComponent from './components/TalentComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
</script>

<template>
  <header>
    <nav>
      <!-- <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/photogallery">Gallery</RouterLink> -->
      <NavBar />
    </nav>
  </header>

  <RouterView />

  <footer>
    <DatesListComponent/>
    <TalentComponent/>
    <VenuesComponent/>
    <FooterComponent />
  </footer>
</template>

<style scoped></style>
