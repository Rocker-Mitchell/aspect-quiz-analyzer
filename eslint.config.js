import eslint from '@eslint/js';
import globals from 'globals';
import tsEslint from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import playwright from 'eslint-plugin-playwright';
import prettier from 'eslint-config-prettier';
import svelteConfig from './svelte.config.js';

export default tsEslint.config(
	eslint.configs.recommended,
	...tsEslint.configs.recommended,
	...svelte.configs['flat/recommended'],
	prettier,
	...svelte.configs['flat/prettier'],
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: {
				svelteConfig,
				parser: tsEslint.parser,
				svelteFeatures: {
					// NB may be changed/removed in minor versions
					experimentalGenerics: true
				}
			}
		}
	},
	{
		...playwright.configs['flat/recommended'],
		files: ['tests/**']
	},
	{
		files: ['tests/**'],
		languageOptions: {
			parserOptions: {
				project: ['./tsconfig.json']
			}
		},
		rules: {
			'@typescript-eslint/no-floating-promises': 'warn'
		}
	},
	{
		ignores: ['build/', '.svelte-kit/', 'dist/', 'test-results/', 'playwright-report/', '.vercel']
	}
);
