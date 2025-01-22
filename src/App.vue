<template>
  <div id="app">
    <!-- Landing Page o Pantalla de Bienvenida -->
    <div v-if="!user">
      <LandingPage />
    </div>

    <!-- Pantalla Principal - Solo se ve después de que el usuario esté logueado -->
    <div v-else>
      <header>
        <nav>
          <div class="logo">
            <h1>Gestor de Recordatorios</h1>
          </div>
          <div class="user-info">
            <p>Hola, {{ user.name }}</p>
            <button @click="logout" class="logout-button">Cerrar sesión</button>
          </div>
        </nav>
      </header>

      <p class="subheader">Organiza tus tareas de manera eficiente</p>

      <main>
        <!-- Aquí se mostrará el componente NotesPage para que el usuario pueda escribir notas -->
        <NotesPage />
      </main>
    </div>
  </div>
</template>

<script>
import LandingPage from './components/LandingPage.vue';
import NotesPage from './components/NotesPage.vue';
import { auth } from './firebase';

export default {
  name: 'App',
  components: {
    LandingPage,
    NotesPage,
  },
  data() {
    return {
      user: null, // Guardará los datos del usuario autenticado
    };
  },
  methods: {
    // Función de logout
    logout() {
      auth.signOut().then(() => {
        this.user = null;
        // Asegurarse de que $router esté disponible antes de usarlo
        if (this.$router) {
          this.$router.push('/'); // Redirige al inicio después de cerrar sesión
        } else {
          console.error('El router no está disponible');
        }
      }).catch(error => {
        console.error('Error al cerrar sesión: ', error);
      });
    },
  },
  mounted() {
    // Se comprueba si hay un usuario autenticado al cargar la aplicación
    auth.onAuthStateChanged(user => {
      if (user) {
        this.user = {
          name: user.displayName || 'Usuario', // Si el nombre no está disponible, se asigna uno genérico
          email: user.email,
        };
        // Redirige a la página de inicio si el usuario está autenticado
        if (this.$router) {
          this.$router.push('/home');
        } else {
          console.error('El router no está disponible');
        }
      } else {
        this.user = null;
        // Redirige al inicio si no hay usuario
        if (this.$router) {
          this.$router.push('/');
        } else {
          console.error('El router no está disponible');
        }
      }

      // Para debuguear, mostramos el estado del usuario
      console.log('Usuario autenticado:', user);
    }, error => {
      // Manejo de errores
      console.error('Error al comprobar el estado de autenticación: ', error);
    });
  },
};
</script>

<style scoped>
/* Estilos globales para el contenedor principal */
#app {
  font-family: 'Arial', sans-serif;
  color: #333;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: linear-gradient(135deg, #4c1bd3, #136fca);
}

/* Estilos para el header */
header {
  background-color: #141414;
  color: white;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  width: 100%;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.logo h1 {
  margin: 0;
  font-size: 28px;
  font-weight: bold;
}

.user-info {
  display: flex;
  align-items: center;
}

.user-info p {
  margin-right: 15px;
  font-size: 16px;
  font-weight: 600;
}

.logout-button {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 14px;
  border-radius: 6px;
  transition: background-color 0.3s ease;
  margin-left: auto; 
}

.logout-button:hover {
  background-color: #d32f2f;
}

/* Estilo para la subheader */
.subheader {
  text-align: center;
  font-size: 20px;
  margin-top: 120px; /* Ajustado para que esté justo debajo del header */
  color: #ffffff;
}

/* Estilo para el contenido principal */
main {
  padding: 20px;
  margin-top: 20px; /* Ajustado para que no haya sobrelapamiento */
  background: linear-gradient(135deg, #4c1bd3, #136fca);
  flex-grow: 1;
}

/* Diseño responsivo para dispositivos pequeños */
@media (max-width: 768px) {
  nav {
    flex-direction: column;
    text-align: center;
  }

  .user-info {
    margin-top: 10px;
  }

  .logo h1 {
    font-size: 24px;
  }

  .logout-button {
    margin-top: 10px;
  }

  .subheader {
    font-size: 18px;
    margin-top: 150px;
  }

  main {
    padding: 10px;
  }
}

@media (max-width: 480px) {
  .logo h1 {
    font-size: 20px;
  }

  .user-info p {
    font-size: 14px;
  }

  .logout-button {
    padding: 8px 16px;
    font-size: 12px;
  }

  .subheader {
    font-size: 16px;
    margin-top: 160px;
  }
}

</style>
