<script>
  export default {
    data: ()=> ({
      todos: [],
      newItem: ''
    }),
    methods: {
      addTodo() {
        this.todos.push({todo: this.newItem, completed: false})
        this.newItem = ''
      },
      markComplete(todo) {
        todo.completed = !todo.completed
      }
    }
  }
</script>

<template>
  <div class="container">
    <div class="card">
      <h1 v-if="todos.length === 0">What would you like to get done today?</h1>
      <h1 v-else>Todos</h1>
      <input v-model="newItem" type="text" placeholder="Add a todo">
      <button @click="addTodo">bang button</button>
      <ul>
        <li v-for="todo in todos"
          :class="{completed: todo.completed}"
          @click="markComplete(todo)"
        >
          {{todo.todo}}
          {{todo.completed}}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('https://images.unsplash.com/photo-1508624217470-5ef0f947d8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80');
}

.card {
  height: fit-content;
  width: 300px;
  background-color: rgba(228, 228, 228, 0.329);
  backdrop-filter: blur(5px);
  border-radius: 10px;
}

.completed {
  color: red;
}
</style>
