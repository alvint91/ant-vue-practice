<script>
export default {
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    increment() {
      this.count++
    },
    reset() {
      this.count = 0
    }
  }
}
</script>

<template>
  <header>
  </header>

  <main>
    <div class="container" :class="{'light-yellow': count >= 3, 'yellow': count >= 6, 'light-orange': count >= 9, 'orange': count >= 12, 'light-red': count >= 15, 'red': count > 18, 'this-is-fine': count > 20}">
      <div class="button-container">
        <h2 :class="{'hidden': count < 21}">This is not fine</h2>
        <div>
          <button :class="{'hidden': count > 20}" @click="increment">{{count}}</button>
        </div>
        <div>
          <button @click="reset">Reset</button>
        </div>
      </div>
    </div>
  </main>

</template>

<style scoped>
h2 {
  font-family: Arial, sans-serif;
  text-align: center
}

button {
  width: 100%;
  height: 50px;
  margin: 1rem 0;
}

.container {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button-container {
  width: 200px
}

.light-yellow {
  background-color: #fef08a;
}

.yellow {
  background-color: #fcd34d;
}

.light-orange {
  background-color: #fb923c;
}

.orange {
background-color: #f97316;
}

.light-red {
background-color: #ef4444;
}

.red {
background-color: #dc2626;
}

.this-is-fine {
  background-image: url("https://preview.redd.it/qsgpr0ev4dl61.png?auto=webp&s=22aa02d8f9a170ee4cc38e413b69325a146d432f")
}

.hidden {
  display: none;
}
</style>
