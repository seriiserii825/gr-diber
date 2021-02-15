// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config
// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'http://wp-diber-gridsome.host1670806.hostland.pro/', // required
        apiBase: 'wp-json',
        typeName: 'WordPress',
        perPage: 100,
        concurrent: 10,
      },
    },
  ],
  templates: {
    BevandeCats: [
      {
        path: '/bevande-cat/:slug',
        component: './src/templates/BevandeCats.vue',
      },
    ],
    WordPressLeNostreBirre: [
      {
        path: '/birre/:slug',
        component: './src/templates/Birre.vue',
      },
    ],
  },
};
