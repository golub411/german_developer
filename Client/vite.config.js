import react from '@vitejs/plugin-react';
import ViteCompressionPlugin from 'vite-plugin-compression';

export default {
  plugins: [
    react(),
    ViteCompressionPlugin({
      algorithm: 'gzip',
      ext: '.gz',
      deleteOriginFile: false,
      threshold: 10240,
      include: /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i,
    }),
  ],
  build: {
    outDir: 'german',
  },
};
