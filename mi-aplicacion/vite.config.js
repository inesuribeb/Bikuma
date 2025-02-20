import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Escucha en todas las interfaces de red
    port: 3000,       // Puerto fijo (puedes cambiarlo)
    open: true,       // Abre automáticamente en el navegador
  }
})