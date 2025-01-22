import { createApp } from 'vue';
import './estilos.css';
import App from './App.vue';
import router from './router/router'; 

createApp(App)
  .use(router) // Ruter de mi aplicacion
  .mount('#app');

