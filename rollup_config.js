import resolve from '@rollup/plugin-node-resolve'; // locate and bundle dependencies in node_modules (mandatory)
import { terser } from "rollup-plugin-terser"; // code minification (optional)

export default {
	input: 'src/main.js',
	output: [
		{
			format: 'iife',
			name: 'app',
			file: 'dist/bundle.js'
		}
	],
	plugins: [ resolve(), terser() ],
};