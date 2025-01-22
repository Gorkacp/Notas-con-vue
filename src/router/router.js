import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../components/LandingPage.vue'; // Página de bienvenida
import NotesPage from '../components/NotesPage.vue'; // Página de notas
import { auth } from '../firebase'; // Importa tu instancia de autenticación

const routes = [
  { path: '/', component: LandingPage }, // Ruta de inicio (pantalla de bienvenida)
  { path: '/home', component: NotesPage }, // Ruta de la página de notas
];

const router = createRouter({
  history: createWebHistory(), // Usamos el modo de historial
  routes, // Especificamos las rutas
});

// Lógica para la redirección en función de si el usuario está autenticado
router.beforeEach((to, from, next) => {
  auth.onAuthStateChanged(user => {
    if (to.path === '/home' && !user) {
      // Si el usuario intenta acceder a /home pero no está autenticado, redirige a la página de bienvenida
      next('/');
    } else if (to.path === '/' && user) {
      // Si el usuario está autenticado y va a la ruta de inicio, redirígelo a /home
      next('/home');
    } else {
      // De lo contrario, permite la navegación normal
      next();
    }
  });
});

export default router;
