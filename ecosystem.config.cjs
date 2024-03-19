module.exports = {
	apps: [
		{
			name: 'ex001-nuxt-with-api',
			port: "4333",
			exec_mode: 'cluster',
			instances: 'max',
			script: './node_modules/nuxt/bin/nuxt.js',
			args: 'start'
		}
	]
};