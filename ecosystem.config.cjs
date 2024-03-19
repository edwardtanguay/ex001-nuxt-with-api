module.exports = {
	apps: [
		{
			name: 'ex001-nuxt-with-api',
			exec_mode: 'cluster',
			instances: 'max',
			script: './node_modules/nuxt/bin/nuxt.js',
			args: 'start'
		}
	]
};