// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
// const path = require('path');

module.exports = {
	core: {
		builder: 'webpack5',
	},
	stories: [
		"../stories/**/*.stories.mdx",
		"../stories/**/*.stories.@(js|jsx|ts|tsx)",
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"storybook-dark-mode",
		{
		name: "@storybook/addon-postcss",
		options: {
			postcssLoaderOptions: {
			implementation: require("postcss"),
			},
		},
		},
	],
	framework: "@storybook/react",
	/**
	 * 
	 * @param {webpack.Configuration} config 
	 * @returns {webpack.Configuration}
	 */
	webpackFinal: async (config) => {

		// config.resolve.plugins = [
		// 	...(config.resolve.plugins || []),
		// 	new TsconfigPathsPlugin({
		// 	  extensions: config.resolve.extensions,
		// 	}),
		// ];

		config.module.rules = config.module.rules.filter((rule) => {
			if (rule.test && rule.test.toString().includes("svg")) {
				return false;
			}
			return true;
		});

		config.module.rules.push({
			test: /\.svg$/,
			use: [
				{
					loader: '@svgr/webpack',
					options: {typescript: true}
				},
			],
			resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
			type: 'javascript/auto',
			issuer: {
				and: [/\.(ts|tsx|js|jsx|md|mdx)$/]
			}
		});

		config.module.rules.push({
			test: /\.svg$/i,
			type: 'asset/resource',
			resourceQuery: /url/, // *.svg?url
			generator: { filename: 'static/media/[path][name][ext]' }
		});

		config.module.rules.push({
			test: /\.(ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
			type: 'asset/resource',
			generator: { filename: 'static/media/[path][name][ext]' }
		});
		
		// TODO: Possibly make an alias for assets folder
		// config.resolve.alias.assets = path.resolve(__dirname, '../src/assets');


		return config;
	},
};
