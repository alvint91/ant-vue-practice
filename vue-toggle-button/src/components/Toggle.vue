<script>
 export default {
  data() {
    return {
      clicked: false,
    }
  },
  methods: {
    onClick() {
      this.clicked = !this.clicked
    }
  }
}
</script>

<template>
  <div class="container" :class="{dark: this.clicked}">
    <div class="button-container" :class="{light: this.clicked}">
      <button :class="{clicked: this.clicked}" @click="onClick"></button>
    </div>
  </div>
</template>

<style scoped>
  button {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: none;
    margin: 0;
    position: absolute;
    background-color: rgb(56, 73, 73);
  }

  button.clicked {
    right: 0;
    background-color: rgb(255, 241, 164);
  }

  .button-container {
    display: flex;
    position: relative;
    padding: 0;
    border: 1px solid black;
    width: 100px;
    height: 50px;
    border-radius: 25px;
    background-color: lightblue;
  }

  .light {
    border: 1px solid white;
    background-color: lemonchiffon;
  }

  .container {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dark {
    background-color: black;
  }
</style>
