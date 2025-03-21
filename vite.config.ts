import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
	plugins: [vue()],
	css: {
		postcss: './postcss.config.js',
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@components': path.resolve(__dirname, 'src/components/'),
			'@layouts': path.resolve(__dirname, 'src/components/layouts'),
			'@assets': path.resolve(__dirname, 'src/assets/'),
		},
	},
});
