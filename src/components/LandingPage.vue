<template>
  <div class="landing-page">
    <h1>Bienvenido al Gestor de Recordatorios</h1>
    <p class="subheader">Organiza tus tareas de manera eficiente</p>
    
    <div class="buttons">
      <button @click="loginWithGoogle" class="google-btn">Iniciar sesión con Google</button>
      <button @click="showLoginForm" class="login-btn">Iniciar sesión con correo electrónico</button>
      <button @click="showRegisterForm" class="register-btn">Registrar cuenta</button>
    </div>

    <!-- Formulario de inicio de sesión -->
    <div v-if="isLoginFormVisible" class="form-container">
      <h2>Iniciar sesión</h2>
      <form @submit.prevent="login">
        <input type="email" v-model="email" placeholder="Correo electrónico" required />
        <input type="password" v-model="password" placeholder="Contraseña" required />
        <button type="submit">Iniciar sesión</button>
      </form>
      <button @click="closeForm" class="close-btn">Cerrar</button>
    </div>

    <!-- Formulario de registro -->
    <div v-if="isRegisterFormVisible" class="form-container">
      <h2>Registrar cuenta</h2>
      <form @submit.prevent="register">
        <input type="email" v-model="email" placeholder="Correo electrónico" required />
        <input type="password" v-model="password" placeholder="Contraseña" required />
        <button type="submit">Registrar cuenta</button>
      </form>
      <button @click="closeForm" class="close-btn">Cerrar</button>
    </div>

    <div v-if="errorMessage" class="error-message">
      <p>{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
// Importa las funciones necesarias desde el archivo firebase.js
import { googleLogin, emailLogin, registerWithEmail } from '../firebase';

export default {
  // Definimos el estado del componente con las variables necesarias
  data() {
    return {
      email: '',  // Correo electrónico ingresado por el usuario
      password: '',  // Contraseña ingresada por el usuario
      errorMessage: null,  // Mensaje de error si algo sale mal
      isLoginFormVisible: false,  // Bandera para mostrar el formulario de inicio de sesión
      isRegisterFormVisible: false  // Bandera para mostrar el formulario de registro
    };
  },
  methods: {
    // Método para realizar el inicio de sesión con correo electrónico
    async login() {
      try {
        // Llama a la función emailLogin para autenticar al usuario
        await emailLogin(this.email, this.password);
        // Si el login es exitoso, redirige a la página 'home'
        this.$router.push('/home');
      } catch (error) {
        // Si ocurre un error, muestra un mensaje y lo registra en la consola
        this.errorMessage = 'Error al iniciar sesión, por favor verifica tus credenciales.';
        console.error('Error de login con email: ', error);
      }
    },
    // Método para realizar el inicio de sesión con Google
    async loginWithGoogle() {
      try {
        // Llama a la función googleLogin para autenticar al usuario
        await googleLogin();
        // Si el login es exitoso, redirige a la página 'notes'
        this.$router.push('/notes');
      } catch (error) {
        // Si ocurre un error, muestra un mensaje y lo registra en la consola
        this.errorMessage = 'Hubo un problema al iniciar sesión con Google.';
        console.error('Error de login con Google: ', error);
      }
    },
    // Método para registrar un nuevo usuario con correo electrónico y contraseña
    async register() {
      try {
        // Llama a la función registerWithEmail para registrar al usuario
        await registerWithEmail(this.email, this.password);
        // Si el registro es exitoso, redirige a la página 'home'
        this.$router.push('/home');
      } catch (error) {
        // Si ocurre un error, muestra un mensaje y lo registra en la consola
        this.errorMessage = 'Error al registrar la cuenta, por favor verifica los datos.';
        console.error('Error de registro: ', error);
      }
    },
    // Método para mostrar el formulario de inicio de sesión
    showLoginForm() {
      this.isLoginFormVisible = true;  // Muestra el formulario de inicio de sesión
      this.isRegisterFormVisible = false;  // Oculta el formulario de registro
    },
    // Método para mostrar el formulario de registro
    showRegisterForm() {
      this.isRegisterFormVisible = true;  // Muestra el formulario de registro
      this.isLoginFormVisible = false;  // Oculta el formulario de inicio de sesión
    },
    // Método para cerrar ambos formularios
    closeForm() {
      this.isLoginFormVisible = false;  // Oculta el formulario de inicio de sesión
      this.isRegisterFormVisible = false;  // Oculta el formulario de registro
    }
  }
};
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Helvetica Neue', sans-serif;
  background-color: #f8f8f8;
  color: #444;
  line-height: 1.6;
}

.landing-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #4c1bd3, #136fca);
  color: #fff;
  text-align: center;
  padding: 30px;
}

h1 {
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.subheader {
  font-size: 1.5rem;
  margin-bottom: 50px;
  color: #bdc3c7;
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 380px;
}

button {
  padding: 14px 25px;
  font-size: 1.1rem;
  font-weight: 500;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

.google-btn {
  background-color: #0054db;
  color: white;
}

.google-btn:hover {
  background-color: #357ae8;
}

.login-btn {
  background-color: #019940;
  color: white;
}

.login-btn:hover {
  background-color: #27ae60;
}

.register-btn {
  background-color: #e98401ef;
  color: white;
}

.register-btn:hover {
  background-color: #e67e22;
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #222020;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  margin-top: 20px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
}

input {
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ddd;
}

button[type="submit"] {
  background-color: #019940;
  color: white;
  border-radius: 5px;
  border: none;
  padding: 12px;
}

button[type="submit"]:hover {
  background-color: #27ae60;
}

.close-btn {
  background-color: #e74c3c;
  color: white;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  cursor: pointer;
}

.close-btn:hover {
  background-color: #c0392b;
}

.error-message {
  margin-top: 30px;
  padding: 15px;
  background-color: #e74c3c;
  color: white;
  border-radius: 6px;
  width: 100%;
  max-width: 380px;
  font-size: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }

  .subheader {
    font-size: 1.2rem;
    margin-bottom: 30px;
  }

  .buttons {
    gap: 15px;
    max-width: 100%;
  }

  .form-container {
    width: 90%;
  }

  .close-btn {
    padding: 8px;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 2rem;
  }

  .subheader {
    font-size: 1rem;
  }

  .buttons {
    gap: 10px;
  }

  .form-container {
    width: 90%;
  }

  button {
    font-size: 1rem;
    padding: 12px 20px;
  }
}
</style>
