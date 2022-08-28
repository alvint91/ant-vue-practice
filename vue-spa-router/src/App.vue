<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import ThirdView from './views/ThirdView.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/third-view">Third View</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  background-color: slategray;
  padding: 1rem;
}

.wrapper {
  display: flex;
  justify-content: center;
}

a {
  margin: 0 1rem;
  text-decoration: none;
  color: white;
}
</style>
