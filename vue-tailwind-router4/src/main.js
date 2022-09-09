import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './index.css';
import './assets/main.css';
import { menuItems, artists } from './data.js';

const app = createApp(App);

app.provide('menuItems', menuItems);
app.provide('artists', artists);
app.use(router);
app.mount('#app');
