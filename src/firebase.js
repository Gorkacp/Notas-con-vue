// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

/**
 * Configuración de Firebase.
 * Esta configuración incluye las credenciales de acceso necesarias para conectar tu aplicación con Firebase.
 * 
 * @type {Object}
 * @property {string} apiKey - La clave de API para autenticar tu aplicación.
 * @property {string} authDomain - El dominio de autenticación de tu proyecto Firebase.
 * @property {string} projectId - El ID de tu proyecto Firebase.
 * @property {string} storageBucket - El nombre de tu bucket de almacenamiento de Firebase.
 * @property {string} messagingSenderId - El ID del remitente de mensajes de Firebase.
 * @property {string} appId - El ID de tu aplicación en Firebase.
 */
const firebaseConfig = {
  apiKey: "AIzaSyCbGrA-0Bx2Y5w6eiMeqDeDW5Q8W4rt-ws", // Clave de API
  authDomain: "recordatorios-f8c0e.firebaseapp.com", // Dominio de autenticación
  projectId: "recordatorios-f8c0e", // ID de proyecto
  storageBucket: "recordatorios-f8c0e.appspot.com", // Bucket de almacenamiento
  messagingSenderId: "646311992116", // Sender ID
  appId: "1:646311992116:web:xxxxxxx" // ID de aplicación
};

// Inicializa la app de Firebase
/**
 * Inicializa Firebase con la configuración proporcionada.
 * 
 * @param {Object} firebaseConfig - Configuración de Firebase.
 * @returns {Object} app - Instancia de la aplicación Firebase.
 */
const app = initializeApp(firebaseConfig);

// Inicializa los servicios de Firebase
const auth = getAuth(app);
const db = getFirestore(app);

/**
 * Función para iniciar sesión con correo electrónico y contraseña.
 * 
 * @param {string} email - El correo electrónico del usuario.
 * @param {string} password - La contraseña del usuario.
 * @returns {Object} user - El usuario autenticado.
 * @throws {Error} Si ocurre un error durante el inicio de sesión.
 */
export const emailLogin = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return user;
  } catch (error) {
    throw new Error(error.message);  // Lanza el error para ser capturado en Vue
  }
};

/**
 * Función para registrar un nuevo usuario con correo electrónico y contraseña.
 * 
 * @param {string} email - El correo electrónico del nuevo usuario.
 * @param {string} password - La contraseña del nuevo usuario.
 * @returns {Object} user - El usuario recién creado.
 * @throws {Error} Si ocurre un error durante el registro.
 */
export const registerWithEmail = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return user;  // Devuelve el objeto de usuario
  } catch (error) {
    throw new Error(error.message);  // Lanza el error para ser capturado en Vue
  }
};

/**
 * Función para iniciar sesión con Google.
 * 
 * @returns {Object} user - El usuario autenticado con Google.
 * @throws {Error} Si ocurre un error durante el inicio de sesión con Google.
 */
export const googleLogin = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const userCredential = await signInWithPopup(auth, provider);
    const user = userCredential.user;
    return user;  // Devuelve el usuario con información como nombre y correo
  } catch (error) {
    throw new Error(error.message);  // Lanza el error para ser capturado en Vue
  }
};

/**
 * Función para obtener las notas desde Firestore.
 * 
 * @returns {Array} notesList - Lista de las notas obtenidas de Firestore.
 * @throws {Error} Si ocurre un error al obtener las notas.
 */
export const getNotes = async () => {
  const notesCol = collection(db, 'notes');
  const notesSnapshot = await getDocs(notesCol);
  const notesList = notesSnapshot.docs.map(doc => doc.data());
  return notesList;
};

// Exporta los servicios de autenticación y base de datos
export { auth, db };
