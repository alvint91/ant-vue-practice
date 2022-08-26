<script>
  let id = 1
  export default {
    data: ()=> ({
      todos: [],
      newItem: ''
    }),
    methods: {
      addTodo() {
        if (this.newItem.length >= 3) {
          this.todos.push({ id: id++, todo: this.newItem, completed: false })
          this.newItem = ''
        }
      },
      markComplete(todo) {
        todo.completed = !todo.completed
      },
      removeTodo(todo) {
        // console.log(todo.id)
        const todoIndex = this.todos.findIndex(el => {
          return el.id === todo.id
        })
        // console.log(todoIndex)
        this.todos.splice(todoIndex, 1)
      }
    },
    computed: {
      reverseList() {
        return [...this.todos].reverse()
      }
    }
  }
</script>

<template>
  <div class="container">
    <div class="card">
      <h1 v-if="todos.length === 0">What would you like to get done today?</h1>
      <h1 v-else>Todos</h1>

      <div class="input-container">
        <input @keyup.enter="addTodo" v-model="newItem" type="text" placeholder="Add a todo">
        <button class="add-btn" :disabled="newItem.length < 3" @click="addTodo">+</button>
      </div>

      <ul>
        <li
          v-for="todo in reverseList"
          :class="{completed: todo.completed}"
          @click="markComplete(todo)"
          :key="todo.id">
          {{todo.todo}}
            <button
              class="delete-btn"
              v-if="todo.completed === true"
              @click="removeTodo(todo)">
              x
            </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  font-family: sans-serif;
}

input {
  width: 100%;
  padding: 2px 0;
  margin: 0;
  border: none;
}

ul {
  width: 75%;
  list-style-type: none;
  padding: 0;
}

li {
  text-align: left;
  margin: .75rem 0;
}

.input-container {
  position: relative;
}

.add-btn {
  position: absolute;
  top: 0;
  right: 0;
  color: white;
  background-color: lightslategrey;
  border: none;
  height: 100%;
  width: 10%;
}

.delete-btn {
  margin-left: 2rem;
  color: white;
  background-color: lightslategrey;
  border: none;
  height: 100%;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('https://images.unsplash.com/photo-1508624217470-5ef0f947d8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80');
}

.card {
  height: fit-content;
  width: 500px;
  color: white;
  background-color: rgba(228, 228, 228, 0.329);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  padding: 2rem;
}

.completed {
  text-decoration: line-through;
}
</style>
