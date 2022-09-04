import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './index.css';
import './assets/main.css';
import menuItems from './data.js';

const app = createApp(App);

app.provide('menuItems', menuItems);
app.use(router);
app.mount('#app');
