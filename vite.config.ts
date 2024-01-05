import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

//loader: { '.js': 'jsx' }"
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
});
