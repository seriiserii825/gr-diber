// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/
// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
// module.exports = function (api) {
//   api.loadSource(({ addCollection }) => {
//     // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
//   })
//
//   api.createPages(({ createPage }) => {
//     // Use the Pages API here: https://gridsome.org/docs/pages-api/
//   })
// }
const axios = require('axios');
module.exports = function(api) {
	api.loadSource(async (actions) => {
		const { data } = await axios.get(
			'https://gr-diber.seriiburduja.ru/wp-json/wp/v2/bevande-cat'
		);
		const collection = actions.addCollection('BevandeCats');
		for (const item of data) {
			collection.addNode({
				id: item.id,
				name: item.name,
				slug: item.slug,
				taxonomy: item.taxonomy,
				acf: item.acf,
			});
		}
	});
};
