// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCbGrA-0Bx2Y5w6eiMeqDeDW5Q8W4rt-ws", // Clave de API
  authDomain: "recordatorios-f8c0e.firebaseapp.com", // Esto es el dominio de autenticación
  projectId: "recordatorios-f8c0e", // ID de tu proyecto
  storageBucket: "recordatorios-f8c0e.appspot.com", // Este lo puedes obtener de la consola de Firebase
  messagingSenderId: "646311992116", // El número de tu proyecto
  appId: "1:646311992116:web:xxxxxxx" // El ID de tu aplicación
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa servicios de Firebase
const auth = getAuth(app);
const db = getFirestore(app);

// Función para login con email y contraseña
export const emailLogin = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return user;
  } catch (error) {
    throw new Error(error.message);  // Lanza el error para que pueda ser capturado en Vue
  }
};

// Función para registrar usuario con email y contraseña
export const registerWithEmail = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return user;  // Devuelve el objeto de usuario
  } catch (error) {
    throw new Error(error.message);  // Lanza el error para que pueda ser capturado en Vue
  }
};

// Función para login con Google
export const googleLogin = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const userCredential = await signInWithPopup(auth, provider);
    const user = userCredential.user;
    return user;  // Devuelve el usuario con información como nombre y correo
  } catch (error) {
    throw new Error(error.message);  // Lanza el error para que pueda ser capturado en Vue
  }
};

// Función para obtener las notas de Firestore
export const getNotes = async () => {
  const notesCol = collection(db, 'notes');
  const notesSnapshot = await getDocs(notesCol);
  const notesList = notesSnapshot.docs.map(doc => doc.data());
  return notesList;
};

// Exporta todo lo necesario
export { auth, db };
