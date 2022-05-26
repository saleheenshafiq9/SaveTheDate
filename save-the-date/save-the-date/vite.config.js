import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import svgrPlugin from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  // This changes the out put dir from dist to build
  // comment this out if that isn't relevant for your project
  build: {
    outDir: 'build',
  },'server.hmr.overlay':false,
  esbuild: {
    loader: 'jsx',
  },
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.vue'],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      }
    }
  },
  plugins: [
    'import-analysis',
    reactRefresh(),
    {
      name: "load-js-files-as-jsx",
      setup(build) {
        build.onLoad({ filter: /src\\.*\.js$/ }, async (args) => ({
          loader: { ".js": "jsx" },
          contents: await fs.readFile(args.path, "utf8"),
        }));
      }},
    svgrPlugin({
      svgrOptions: {
        icon: true,
        // ...svgr options (https://react-svgr.com/docs/options/)
      },
    }),
  ],
})
