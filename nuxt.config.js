import path from 'path'
require('dotenv').config()

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel : 'stylesheet', href : 'https://fonts.googleapis.com/icon?family=Material+Icons'},
    ],
    script: [
      { src: '//cdn.jsdelivr.net/npm/element-plus' } // load script in your static folder
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    './assets/style/app.css',
  ],

  server: {
		port: process.env.NUXT_PORT,
	},

	subFolders: true,
  
	loading: {
		color: '#141414',
		height: '4px',
    throttle: 0
	},

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    './plugins/element-ui.js',
    './plugins/axios.js',
    './plugins/global.js',
    './plugins/v-money.js'
  ],

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/dotenv',
  ],
  auth: {
		redirect: {
        logout: '/login' ,
        login: false,
        // home: '/'
    },
		strategies: {
			local: {
				endpoints: {
					login: { url: 'auth/login', method: 'post', propertyName: 'token' },
					logout: { url: 'logout', method: 'post' },
					user: { url: 'user/get', method: 'get', propertyName: 'data' }
				},
				tokenType: 'Bearer',
			}
		},
		cookie: {
			prefix: 'auth.',
		},
		resetOnError: true
	},
	router: {
		middleware: [
			'auth',
		]
	},

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BASE_URL,
		progress: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    extractCSS: {
      ignoreOrder: true
    },
    postcss : {
      postcssOptions : {
        plugins : {
          tailwindcss : {
            path : path.resolve(__dirname, './tailwind.config.js')
          },
          autoprefixer : {},
        }
      }
    }
  }
}
