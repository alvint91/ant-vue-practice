<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { provide } from 'vue';
import NavBar from './components/NavComponent.vue';
import VenuesComponent from './components/VenuesComponent.vue';
import DatesListComponent from './components/DatesListComponent.vue';
import TalentComponent from './components/TalentComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
// import {menuItems } from './data.js'
</script>

<template>
  <header>
    <nav>
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
