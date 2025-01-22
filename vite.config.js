/**
 * Archivo de configuración de Vite
 * Configura Vite para trabajar con Vue.js y define la ruta base para el despliegue.
 *
 * @see {@link https://vitejs.dev/config/ Documentación de configuración de Vite}
 */

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

/**
 * Exporta la configuración de Vite.
 *
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  // Plugins utilizados en el proyecto
  plugins: [vue()],
  
  /**
   * Ruta base pública para la aplicación.
   * Esto es necesario para cargar correctamente los recursos al desplegar en GitHub Pages.
   * El valor debe coincidir con el nombre del repositorio.
   * 
   * @see {@link https://vitejs.dev/guide/static-deploy.html#github-pages Guía de despliegue en GitHub Pages}
   */
  base: '/Notas-con-vue/',
})


